# Zeroday OSS Hacktoberfest — Dharwad 2026

The event landing page for Zeroday OSS Hacktoberfest in Dharwad. It presents event registration and sponsor information, the organising team, and participating organisations.

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
app/
  components/       Landing experience, event details, organising team
  data/             Organiser content
  globals.css       Shared and responsive styles
  layout.tsx        Root document and metadata
  page.tsx          Route entry point
public/             Event artwork, portraits, sponsor and organisation logos
```

## Common commands

- `npm run dev` — start the local development server
- `npm run lint` — run ESLint
- `npm run build` — create a production build
- `npm start` — serve the production build

## Updating event content

- Update organiser names and portraits in `app/data/organisers.ts`.
- Event date, registration links, community link, and sponsor content are in `app/components/EventDetails.tsx`.
- Organisation logos are in `app/components/OrganisingTeam.tsx`; place image assets in `public/` and reference them with root-relative paths such as `/logo.png`.
- Use descriptive alt text for meaningful images. Keep decorative effects in CSS rather than adding redundant image descriptions.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidance.
