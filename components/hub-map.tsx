import outline from "@/lib/data/nz-outline.json";

/**
 * A static dot map: every place in a hub drawn over New Zealand's coastline, rendered to plain SVG at
 * build time. No tiles, no script. The coastline and large lakes are Natural Earth (public domain, see
 * scripts/build-nz-outline.mjs); positions come from the hub record, already rounded to 3 decimals.
 *
 * The frame fits the hub's own points with a margin, so a region hub shows its region and the index
 * pages show the country. Coastline and lake rings that fall wholly outside the frame are left out.
 */
const WIDTH = 640;

export function HubMap({ points, label, caption }: { points: [number, number][]; label: string; caption: string }) {
  if (!points.length) return null;
  const lats = points.map(([lat]) => lat), lons = points.map(([, lon]) => lon);
  // At least about 0.6 degrees across, so one tight cluster still shows enough coast to place it.
  const span = Math.max(Math.max(...lats) - Math.min(...lats), (Math.max(...lons) - Math.min(...lons)) * 0.75, 0.6);
  const midLat = (Math.max(...lats) + Math.min(...lats)) / 2, midLon = (Math.max(...lons) + Math.min(...lons)) / 2;
  const half = span * 0.62;
  const kx = Math.cos(midLat * Math.PI / 180);
  const frame = { north: midLat + half, south: midLat - half, west: midLon - half / kx, east: midLon + half / kx };
  const height = Math.round(WIDTH * (frame.north - frame.south) / ((frame.east - frame.west) * kx));
  const x = (lon: number) => (lon - frame.west) / (frame.east - frame.west) * WIDTH;
  const y = (lat: number) => (frame.north - lat) / (frame.north - frame.south) * height;
  const fixed = (value: number) => Math.round(value * 10) / 10;
  const inFrame = (ring: [number, number][]) => ring.some(([lon, lat]) => lon >= frame.west - 1 && lon <= frame.east + 1 && lat >= frame.south - 1 && lat <= frame.north + 1);
  const draw = (rings: [number, number][][]) => rings.filter(inFrame).map((ring) => `M${ring.map(([lon, lat]) => `${fixed(x(lon))} ${fixed(y(lat))}`).join("L")}Z`).join("");
  const coast = draw(outline.rings as [number, number][][]);
  const lakes = draw(outline.lakes as [number, number][][]);
  const radius = points.length > 120 ? 3 : 4.5;

  return <figure className="hub-map">
    <svg viewBox={`0 0 ${WIDTH} ${height}`} role="img" aria-label={label} preserveAspectRatio="xMidYMid meet">
      <rect width={WIDTH} height={height} className="hub-map-sea" />
      <path d={coast} className="hub-map-land" />
      {lakes && <path d={lakes} className="hub-map-lake" />}
      {points.map(([lat, lon], index) => <circle key={index} cx={fixed(x(lon))} cy={fixed(y(lat))} r={radius} className="hub-map-dot" />)}
    </svg>
    <figcaption>{caption}</figcaption>
  </figure>;
}
