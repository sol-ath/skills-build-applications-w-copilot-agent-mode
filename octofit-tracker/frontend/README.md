# OctoFit Tracker Frontend

The React presentation tier uses Vite environment variables to build API URLs for Codespaces and localhost.

Create `octofit-tracker/frontend/.env.local` and define:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API requests use:

```text
https://$VITE_CODESPACE_NAME-8000.app.github.dev/api/[component]/
```

When `VITE_CODESPACE_NAME` is unset, the app safely falls back to:

```text
http://localhost:8000/api/[component]/
```
