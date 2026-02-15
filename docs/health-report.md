# Extraction Health Report

## Source Documents Used
- Filesystem scans:
  - `find /workspace -maxdepth 6 -type f \( -iname '*.docx' -o -iname '*.pdf' -o -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' \)`
  - `find /workspace -maxdepth 6 -type d | rg -i 'dropbox|bosque|digital|nextgen|sms|southwest|ffj'`
- Public fetches:
  - `https://digitalherencia.vercel.app/`
  - `https://nextgenmanagementagency.vercel.app/`
  - `https://southwestmediaservices.com/`
  - `https://raw.githubusercontent.com/DigitalHerencia/DigitalHerencia/main/README.md`
- Repo context:
  - `/workspace/PitchDeck/Agents.md`

## Files found
### Dropbox / synced files
- No Dropbox directory detected inside `/workspace/PitchDeck`.
- No `.docx` or `.pdf` files detected in `/workspace` within search depth.

### Public-site and repo sources found
- `digitalherencia.vercel.app` (HTML captured)
- `nextgenmanagementagency.vercel.app` (HTML captured)
- `southwestmediaservices.com` (HTML captured)
- Digital Herencia GitHub README (raw markdown captured)
- Local context file: `Agents.md`

## Missing expected files report
- `OnlyFans Business_.docx` — **missing**
- Bosque `ABC Deck v3.0` PDF — **missing**
- Bosque `Info Sheet` PDF — **missing**
- Bosque `Delivery Process SOP` PDF — **missing**
- Bosque paid invoice thread files — **missing**
- SMS event/wedding questionnaire files — **missing**
- SMS package structure files — **missing**
- Optional FFJ docs — **missing**

## Detected image assets
- No branded image files (`.png/.jpg/.jpeg/.webp`) detected in scanned paths.
- Placeholder requirement manifests generated under:
  - `app/assets/bosque/requirements.md`
  - `app/assets/digital-herencia/requirements.md`
  - `app/assets/nextgen/requirements.md`
  - `app/assets/sms/requirements.md`
  - `app/assets/ffj/requirements.md`

## Extraction confidence by entity
- **Bosque Ltd:** Low (high-level context only, no primary docs).
- **Digital Herencia LLC:** Medium (public site + README available; no pricing docs).
- **Next Gen Management Co:** Medium-Low (public site available; missing `OnlyFans Business_.docx`).
- **SMS:** Low (public site content mismatch with expected event/wedding package docs).
- **FFJ:** None (no sources found).
