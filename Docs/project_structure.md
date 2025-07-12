# Project Structure for Curriculum Compass (v1.0)

This document outlines the standard folder and file structure for the Curriculum Compass project. Adhering to this structure will ensure consistency, maintainability, and a clear separation of concerns between the backend and frontend.

## Root Directory

The root directory cleanly separates the backend (`app/`) and frontend (`src/`) concerns, along with top-level configuration files.

```
curriculum-compass/
├── app/                  # All backend code, including Convex functions and schema
├── src/                  # All frontend React application source code
├── public/               # Static assets served by Vite (e.g., favicon)
├── Docs/                 # Project documentation (PRD, Implementation, etc.)
├── .env.local            # Local environment variables (DO NOT COMMIT)
├── .env.local.example    # Template for environment variables
├── .gitignore            # Specifies intentionally untracked files
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # Base TypeScript compiler options
└── ...                   # Other config files (vite, tailwind, postcss)
```

## Backend Structure (`/app`)

All backend code resides in the `/app` directory. The `convex/` sub-directory is the entry point for Convex to load all functions and schema definitions.

```
app/
└── convex/
    ├── schema.ts             # Defines the database schema (users, documents, etc.)
    ├── convex.config.ts      # Installs Convex components (agent, rag, etc.)
    ├── http.ts               # Defines HTTP actions (e.g., webhooks for Polar)
    ├── crons.ts              # Defines scheduled cron jobs (e.g., cleanup tasks)
    ├── auth.ts               # Configuration and functions for `better-auth`
    ├── agent.ts              # Configuration for the `@convex-dev/agent` component
    ├── rag.ts                # Configuration for the `@convex-dev/rag` component
    ├── documents.ts          # Queries, mutations, actions for document management & processing
    ├── users.ts              # Queries, mutations, actions for user profiles and roles
    ├── chat.ts               # Queries, mutations, actions for the AI chat interface
    ├── analytics.ts          # Queries, mutations, actions for the analytics dashboard
    ├── subscriptions.ts      # Queries, mutations, actions for Polar billing integration
    └── lib/                  # Shared helper functions for the backend
        └── utils.ts
```

*   **`app/convex/`**: This is the only directory Convex will scan. By structuring all backend code here, we maintain a clean and organized system.
*   **Feature-based Files (`documents.ts`, `chat.ts`)**: We will group related Convex functions (queries, mutations, actions) into files based on application features for better organization and maintainability.

## Frontend Structure (`/src`)

The `/src` directory contains all the React application code, structured for clarity and scalability.

```
src/
├── assets/               # Static assets like images, logos, and custom fonts
│   └── logo.svg
├── components/           # Reusable React components
│   ├── ui/               # Unstyled, reusable components from shadcn/ui (Button, Input, etc.)
│   ├── features/         # Components specific to a feature
│   │   ├── auth/
│   │   ├── documents/
│   │   ├── chat/
│   │   └── analytics/
│   └── layout/           # Components that define page structure (AppLayout, Header, MobileNavSheet)
├── hooks/                # Custom React hooks (e.g., useAuth, useDocuments)
├── lib/                  # Utility functions and library initializations
│   ├── auth-client.ts    # Client-side setup for `better-auth`
│   ├── convex.ts         # Convex client setup
│   └── utils.ts          # General utility functions (e.g., formatting)
├── pages/                # Top-level components for each application route
│   ├── DashboardPage.tsx
│   ├── ChatPage.tsx
│   ├── DocumentsPage.tsx
│   ├── Auth/
│   │   ├── SignInPage.tsx
│   │   └── SignUpPage.tsx
│   └── Admin/
│       ├── AnalyticsPage.tsx
│       └── BillingPage.tsx
├── App.tsx               # Root component containing the router setup
└── main.tsx              # The main application entry point that renders the App component
```

*   **`/components/features`**: This is where we will build our application's custom components, organized into sub-folders that match our backend feature files (e.g., `/features/documents/` contains `DocumentUpload.tsx`, `DocumentList.tsx`, etc.).
*   **`/components/layout`**: This will contain our main `AppLayout.tsx` and the `MobileNavSheet.tsx` component, which will be conditionally rendered based on screen size.
*   **`/pages`**: Each file in this directory corresponds to a specific route in the application. They are responsible for fetching page-level data and composing layouts and feature components.

## Documentation Structure (`/Docs`)

All project management and high-level documentation are stored here. The structure below reflects the current state of the `/Docs` directory, including the `components/` subfolder for internal and third-party component documentation.

```
Docs/
├── Bug_tracking.md            # Bug and issue tracking log
├── Implementation.md          # Main implementation plan and feature breakdown
├── UI_UX_doc.md               # UI/UX design system, flows, and requirements
├── project_structure.md       # Project folder/file structure and organization
├── components/                # Internal and third-party component usage guides
│   ├── AGENT.md               # @convex-dev/agent usage and integration
│   ├── BETTER_AUTH.md         # @better-auth-kit/convex authentication guide
│   ├── POLAR.md               # @convex-dev/polar (subscriptions/payments) guide
│   ├── RAG.md                 # @convex-dev/rag (RAG/semantic search) guide
│   └── (other component docs)
```

*   **`/Docs/Implementation.md`**: Complete implementation plan, feature analysis, tech stack, and staged roadmap.
*   **`/Docs/project_structure.md`**: Describes the folder/file structure and organization for the project.
*   **`/Docs/UI_UX_doc.md`**: UI/UX design system, user flows, accessibility, and responsive requirements.
*   **`/Docs/Bug_tracking.md`**: Centralized log for all bugs, issues, and resolutions.
*   **`/Docs/components/`**: Contains detailed usage guides for internal and third-party components (e.g., Agent, RAG, Polar, Better Auth). Each `.md` file documents setup, usage, and best practices for its respective component.

---