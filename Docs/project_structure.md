# Project Structure

## Root Directory
```
curriculum-compass/
├── src/
│   ├── components/         # Reusable UI components (shadcn/ui, custom)
│   ├── pages/              # Page-level components (routing targets)
│   ├── services/           # API clients, business logic, AI integration
│   ├── utils/              # Utility functions, helpers
│   ├── assets/             # Images, fonts, static assets
│   ├── styles/             # Global and theme styles (Tailwind, custom)
│   └── index.tsx           # Main React entry point
├── convex/
│   ├── schema.ts           # Convex DB schema definition
│   ├── myFunctions.ts      # Convex serverless functions (queries, mutations)
│   ├── auth.config.ts      # Authentication config (better-auth)
│   ├── agent/              # AI agent logic (RAG, coach persona)
│   └── ...                 # Other Convex backend files
├── public/                 # Static files served as-is (favicon, svg, etc.)
├── Docs/
│   ├── Implementation.md   # Implementation plan
│   ├── project_structure.md# Project structure documentation
│   └── UI_UX_doc.md        # UI/UX design documentation
├── tests/                  # Unit and integration tests
├── config/                 # Environment and build configs
│   ├── tailwind.config.js  # Tailwind CSS config
│   ├── shadcn.config.js    # shadcn/ui config (if needed)
│   └── ...                 # Other config files
├── deployment/             # Deployment scripts, Dockerfiles, CI/CD
├── .env, .env.production   # Environment variables
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite build config
├── tsconfig.json           # TypeScript config
└── README.md               # Project overview
```

## Detailed Structure
- **src/components/**: All reusable UI components, including those copied/generated from shadcn/ui. Organize by feature or atomic design if needed.
- **src/pages/**: Top-level route components, each representing a page (e.g., Dashboard, Chat, Analytics, Onboarding).
- **src/services/**: API clients for Convex, Polar, and AI logic. Business logic and data fetching live here.
- **src/utils/**: Shared utility functions (formatting, validation, helpers).
- **src/assets/**: Images, icons, fonts, and other static assets.
- **src/styles/**: Tailwind base, custom CSS, and theme overrides.
- **convex/**: All backend logic, including schema, serverless functions, authentication config, and AI agent logic.
- **public/**: Static files served directly (e.g., favicon, manifest, SVGs).
- **Docs/**: All project documentation, including implementation plan, structure, and UI/UX docs.
- **tests/**: Unit and integration tests for frontend and backend.
- **config/**: Configuration files for Tailwind, shadcn/ui, and other tools.
- **deployment/**: Scripts and files for deployment, Docker, and CI/CD.
- **.env, .env.production**: Environment-specific variables (API keys, endpoints, secrets).
- **package.json**: Project dependencies, scripts, and metadata.
- **vite.config.ts**: Vite build and plugin configuration.
- **tsconfig.json**: TypeScript project configuration.
- **README.md**: High-level project overview and quickstart.

## Documentation Placement
- All documentation lives in `/Docs` for easy access and versioning.
- Cross-reference between Implementation.md, project_structure.md, and UI_UX_doc.md as needed.
- `convex-components/`: Contains internal usage guides and readmes for Convex-related integrations (not code or UI components). Reference these files (AGENT.md, RAG.md, BETTER_AUTH.md, POLAR.md, RESEND.md) for advanced backend, payments, and email integration usage examples.

## Build & Deployment Structure
- Use Vite for frontend builds and hot reloads.
- Use Convex CLI for backend deployment and schema sync.
- CI/CD via GitHub Actions or similar (lint, test, build, deploy).
- Dockerfile and deployment scripts in `/deployment`.

## Environment-Specific Configurations
- Use `.env` for local development, `.env.production` for production secrets.
- Tailwind and shadcn/ui configs in `/config`.
- Convex and Polar endpoints set via environment variables. 