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

## Claude GitHub Action

A GitHub Action is configured to trigger Claude Code via Azure AI Foundry when someone comments `@claude` on an issue.

### Required Repository Secrets

| Secret | Description |
|---|---|
| `ANTHROPIC_FOUNDRY_RESOURCE` | Azure AI Foundry resource name |
| `ANTHROPIC_FOUNDRY_API_KEY` | Azure AI Foundry API key |

Set these in **Settings → Secrets and variables → Actions** in your GitHub repository.

## API Endpoints

- `GET /api/posts` - List blog posts
- `GET /api/posts/:slug` - Get single post
- `GET /api/tags` - Get all tags
- `GET /api/health` - Health check
