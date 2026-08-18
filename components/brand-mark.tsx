export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="KiwiCamping home">
      <span className="brand-mark" aria-hidden="true" />
      {!compact && <span>KiwiCamping</span>}
    </span>
  );
}
