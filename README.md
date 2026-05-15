# Diablo 4 Build Compare

> 🚧 **Work in Progress** — This project is actively being developed and is not yet complete. Expect missing features, rough edges, and breaking changes. Contributions are very welcome!

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

## How It Works

### Backend flow

1. The frontend sends a `GET /api/v1/build-compare/maxroll/:id` request with a Maxroll planner ID
2. `BuildsManagerMaxrollService` fetches the raw planner JSON from `https://planners.maxroll.gg/profiles/d4/:id`
3. The raw `data` field (string or object) is deserialized into `MaxrollPlannerDataResponseDto`, which contains **profiles** (character set variants) and a flat **items** map
4. `BuildCompareService` iterates over each profile and builds a `SetDto` by mapping slot numbers to `ItemType` using a switch-case lookup:

   | Slot(s)         | Item Type        |
   |-----------------|------------------|
   | 4               | Helm             |
   | 5               | Chest            |
   | 6               | Offhand          |
   | 7, 8, 9, 11, 12 | Weapon           |
   | 10              | Ranged           |
   | 13              | Gloves           |
   | 14              | Pants            |
   | 15              | Boots            |
   | 16, 17          | Ring             |
   | 18              | Amulet           |

5. The result is a `PlannerDto` with the character class, username, and all gear sets (profiles), each holding `SlotItemDto[]` with the resolved item and its type

### Frontend flow

1. The user pastes a Maxroll link or planner ID into the **BuildSearch** component
2. `BuildCompareService` calls the backend and receives a `PlannerDto`
3. The user picks a **Set** (profile variant) from the dropdown
4. `CharacterBuildComponent` maps each `SlotItemDto` to one of the 14 pre-defined gear slots by slot number, marking it `active`
5. Active slots are rendered by **ItemDetail**, which shows:
   - Item name, item power, masterworking level (0–12)
   - Implicits, explicits, greater affixes, tempered affixes
   - Each affix name is resolved through a `TranslatePipe` → `TranslationService` that loads locale-specific JSON files from `assets/i18n/` at runtime
   - A green 🟢 or red 🔴 circle indicates whether the affix is present in the target build

### Build comparison

The **BuildCompare** page renders two independent `CharacterBuildComponent` instances (Build A and Build B) in a 2-column grid. Each column has its own Maxroll import, set selector, gear display, stat checklist, and attribute panel.



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
npm install
npm run dev
```

**Frontend** (port 4200):

```bash
cd d4-frontend
npm install
npm run dev
```

The frontend expects the backend at `http://localhost:3000/api/v1`. Update `src/environments/environment.ts` if needed.

### API

| Method | Endpoint                          | Description                     |
|--------|-----------------------------------|---------------------------------|
| GET    | `/api/v1/build-compare/maxroll/:id` | Fetch and parse a Maxroll build |

Swagger UI: `http://localhost:3000/api/v1/swagger`

## Contributing

Contributions are very welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide on how to get started, open issues, and submit pull requests.

## License

MIT — see [LICENSE](LICENSE) for details.
