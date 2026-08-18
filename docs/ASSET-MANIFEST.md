# Image asset manifest

## Product assets

| File | Use |
| --- | --- |
| `kiwicamping-app-icon.png` | Header, favicon and Apple touch icon |
| `kiwicamping-hero.webp` | Homepage product hero |
| `kiwicamping-feature-1.webp` to `kiwicamping-feature-6.webp` | Current app feature sections and app-guide articles |
| `kiwicamping-qr.png` | QR for App Store app ID `6746952595` |

The QR and App Store buttons must remain 190 pixels wide together on desktop. Buttons, screenshots and cards use square corners.

## Article assets

Every article uses `public/images/articles/<article-slug>.webp`. The directory contains exactly 74 different 1600 by 900 WebP files. Route, camping, rule, planning and cost articles use real licensed photographs; app guides use six different current product screenshots.

Creator, licence and source records for every article live in `docs/IMAGE-SOURCES.md`. Photo-credit links appear inside each image at the lower trailing corner with transparent background and black at 0.3 opacity in both colour schemes.

`npm run assets:check` verifies filenames, WebP signatures, unique hashes and attribution coverage.
