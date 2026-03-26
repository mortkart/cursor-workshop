# Cursor Workshop

A starter project for learning AI-assisted development with Cursor.

## Project Structure

```
cursor-workshop/
├── frontend/          # Next.js application
├── backend/           # Express API server
└── micros/            # Micro-frontends (navbar, footer)
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development servers

```bash
npm run dev
```

This starts both:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Run individually

```bash
npm run dev:frontend    # Frontend only
npm run dev:backend     # Backend only
```

## GitHub Actions

### Claude Code Action

Triggers Claude Code via Azure AI Foundry when someone comments `@claude` on an issue.

### Exception Log Monitor

A scheduled workflow that runs every weekday at 08:00 UTC. It queries Azure Log Analytics for the top 5 most frequent exceptions in the last 24 hours and creates GitHub issues for each one. Duplicate issues are prevented by checking existing open issues with the `exception-monitor` label.

**Log Analytics Workspace:** `law-snkm-p` (resource group: `rg-snkm-shared-p`)

### Required Repository Secrets

| Secret | Description |
|---|---|
| `ANTHROPIC_FOUNDRY_RESOURCE` | Azure AI Foundry resource URL |
| `ANTHROPIC_FOUNDRY_API_KEY` | Azure AI Foundry API key |
| `AZURE_CLIENT_ID` | Azure service principal client ID |
| `AZURE_CLIENT_SECRET` | Azure service principal client secret |
| `AZURE_TENANT_ID` | Azure AD tenant ID |
| `AZURE_SUBSCRIPTION_ID` | Azure subscription ID |

Set these in **Settings → Secrets and variables → Actions** in your GitHub repository.

## API Endpoints

- `GET /api/posts` - List blog posts
- `GET /api/posts/:slug` - Get single post
- `GET /api/tags` - Get all tags
- `GET /api/health` - Health check
