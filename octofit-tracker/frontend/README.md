# OctoFit Tracker frontend

React 19 presentation tier for OctoFit Tracker, served by Vite on port `5173`.

## API configuration

In Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` with the value of
`CODESPACE_NAME`:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

Vite exposes this variable through `import.meta.env`. When it is not defined,
the application safely uses `http://localhost:8000` instead of constructing an
`undefined-8000` URL.

## Scripts

- `npm run dev` starts the Vite server.
- `npm run build` creates a production build.
- `npm run lint` runs Oxlint.
