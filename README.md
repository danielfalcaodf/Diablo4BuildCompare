# Diablo 4 Build Compare

A web application that lets you import and compare Diablo IV character builds from [Maxroll.gg](https://maxroll.gg/) side by side.

## Overview

Paste a Maxroll planner link or ID to load a build, then compare two builds (A vs B) simultaneously. Each build displays all equipped items with their full affix details, including implicits, explicits, greater affixes, and tempered affixes — with visual indicators showing whether each affix matches the target build.

### Features

- 🔗 **Import from Maxroll** — paste a Maxroll planner link or ID to fetch a build
- ⚔️ **Side-by-side comparison** — load Build A and Build B for direct comparison
- 📋 **Full item details** — view item power, masterworking level (up to 12), implicits, affixes, greater affixes, and tempered affixes
- 🌍 **Multi-language support** — affix names available in 10+ locales (English, German, Spanish, French, Italian, Japanese, Korean, Polish, Portuguese, Russian, Turkish, Chinese)
- ✅ **Affix validation** — green/red indicators show which affixes match between builds
- 📖 **Swagger API docs** — available at `/api/v1/swagger`

### Supported Classes

Rogue, Barbarian, Druid, Necromancer, Sorcerer

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | Angular 17, Tailwind CSS          |
| Backend  | NestJS 10, Node.js                |
| HTTP     | Axios / NestJS HttpModule         |
| Docs     | Swagger / OpenAPI                 |
| Deploy   | Docker, Docker Compose            |

## Project Structure

```
Diablo4BuildCompare/
├── d4-backend/          # NestJS REST API
│   └── src/
│       ├── app/build-compare/       # Build comparison logic & controller
│       ├── services/builds-manager-maxroll/  # Maxroll API integration
│       └── model/                   # DTOs, interfaces, enums
├── d4-frontend/         # Angular SPA
│   └── src/app/
│       ├── pages/build-compare/     # Side-by-side comparison page
│       ├── pages/home/              # Home page with single build viewer
│       ├── shared/component/        # Reusable components
│       │   ├── build-search/        # Maxroll import input
│       │   ├── character-build/     # Build display container
│       │   ├── item-detail/         # Item affix viewer
│       │   ├── stat-checklist/      # Missing stats checklist
│       │   └── attribute-display/   # Attribute panel
│       └── assets/i18n/             # Affix translations (10+ locales)
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker & Docker Compose (optional)

### Running with Docker Compose

```bash
docker-compose up --build
```

### Running Manually

**Backend** (port 3000):

```bash
cd d4-backend
yarn install
yarn start:dev
```

**Frontend** (port 4200):

```bash
cd d4-frontend
npm install
npm start
```

The frontend expects the backend at `http://localhost:3000/api/v1`. Update `src/environments/environment.ts` if needed.

### API

| Method | Endpoint                          | Description                     |
|--------|-----------------------------------|---------------------------------|
| GET    | `/api/v1/build-compare/maxroll/:id` | Fetch and parse a Maxroll build |

Swagger UI: `http://localhost:3000/api/v1/swagger`

## License

MIT
