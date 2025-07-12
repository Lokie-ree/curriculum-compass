# Implementation Plan for Curriculum Compass (v1.0)

## Feature Analysis
### Identified Features:
- Secure user authentication with role-based access (Teacher, Coach, Admin)
- Multi-tenancy for district data isolation
- Document upload and management (.pdf, .docx)
- Real-time AI chat interface with context selection
- Actionable content generation (lesson plans, assessments)
- Coach's knowledge base and prioritized notes
- Analytics dashboard for Coaches/Admins (anonymized, aggregated)
- User onboarding with tutorials and sample data
- Export of AI-generated content (.docx, .pdf)
- Subscription management and payments via Polar
- Quality assurance for AI outputs (feedback/flagging)

---

### Feature Categorization:
- **Must-Have Features:**
  - Secure authentication & role management
  - Multi-tenancy
  - Document upload/management
  - Real-time AI chat interface
  - Actionable content generation
  - Coach's knowledge base
  - Analytics dashboard (anonymized)
  - Subscription management (Polar integration)
- **Should-Have Features:**
  - Export to .docx/.pdf
  - Quality assurance/feedback on AI outputs
  - User onboarding/tutorials
- **Nice-to-Have Features:**
  - Pre-populated sample data
  - Advanced analytics visualizations

---

## Recommended Tech Stack
### Frontend:
- **Framework:** React (with Vite) - Fast, modern, and supports modular SPA development.
- **Documentation:** [React Docs](https://react.dev/) | [Vite Docs](https://vitejs.dev/)
- **Routing:** react-router-dom - [Docs](https://reactrouter.com/en/main)
- **Styling:** Tailwind CSS (utility-first, rapid prototyping) - [Tailwind Docs](https://tailwindcss.com/docs/installation/using-vite)
- **UI Components:** shadcn/ui (copy-based, Tailwind + Radix UI) - [shadcn/ui Docs](https://ui.shadcn.com/docs)

### Backend:
- **Framework:** Convex (TypeScript-native, serverless, real-time, transactional)
- **Documentation:** [Convex Docs](https://docs.convex.dev/)

### Database:
- **Database:** Convex (integrated, document-based, supports schema validation)
- **Documentation:** [Convex Database Docs](https://docs.convex.dev/database)

### Authentication:
- **Library:** better-auth for Convex (secure, modern, supports role-based access)
- **Documentation:** [better-auth Convex Docs](https://github.com/get-convex/better-auth/tree/main/examples/react)

### AI Logic:
- **RAG/Agent:** @convex-dev/agent, @convex-dev/rag (retrieval-augmented generation, coach persona)
- **Documentation:** [@convex-dev/agent](https://github.com/get-convex/agent/tree/main/example) | [@convex-dev/rag](https://github.com/get-convex/rag/tree/main/example)

### Payments:
- **Provider:** Polar (B2B SaaS, subscription management, customer portal)
- **Documentation:** [Polar Docs](https://docs.polar.sh/introduction) [@convex-dev/polar](https://github.com/get-convex/polar)

---

## Implementation Stages

### Stage 1: Foundation & Setup

**Duration:** 1 Week
**Dependencies:** None

#### Sub-steps:

-   [x] Initialize project with Vite (React), Convex, and Tailwind CSS, establishing the top-level `/app` and `/src` directories.
-   [x] Configure `better-auth` and create the core auth functions in `/app/convex/auth.ts`.
-   [x] Build the authentication UI components in `/src/components/features/auth/`: `LoginForm`, `SignupForm`, `PasswordReset`.
-   [x] Create the core authentication pages in `/src/pages/auth/`: `Login`, `Signup`, `ForgotPassword`.
-   [x] Implement the base schemas in `/app/convex/schema.ts`: `users`, `organizations` (districts), and `subscriptions`.
-   [x] Build the main application layout components (`AppLayout`, `Header`). Plan for primary navigation to be a sidebar on desktop and a responsive sheet menu (`shadcn/ui Sheet`) on mobile.
-   [x] Set up routing in `src/App.tsx` for auth pages and the main protected dashboard layout.

> **Stage 1 completed 2025-07-12. See Bug_tracking.md for resolved issues.**

---

### Stage 2: Core Features (Teacher Workflow)

**Duration:** 2-3 Weeks
**Dependencies:** Stage 1 completion

#### Sub-steps:

-   [ ] Configure and set up the `@convex-dev/rag` component in `/app/convex/rag.ts`.
-   [ ] Implement the `rag.addAsync` workflow for file uploads, triggered by a Convex action defined in `/app/convex/documents.ts`.
-   [ ] Configure and set up the `@convex-dev/agent` component in `/app/convex/agent.ts`.
-   [ ] Build the document management UI components in `/src/components/features/documents/`: `DocumentUpload`, `DocumentList`, `DocumentCard`.
-   [ ] Create the "My Documents" page at `/src/pages/documents/DocumentsPage.tsx`.
-   [ ] Build the chat UI components in `/src/components/features/chat/`: `ChatInterface`, `MessageBubble`, `ChatInput`.
-   [ ] Implement the core chat flow by connecting the UI to an action in `/app/convex/chat.ts` that uses `agent.createThread` and `thread.generateText`.
-   [ ] Wire the `thread.generateText` function to use the `rag.search` function for context retrieval.
-   [ ] Build the "Teacher First-Time Setup" onboarding flow as specified in the `userFlows` JSON.

---

### Stage 3: Advanced Features & Monetization

**Duration:** 2-3 Weeks
**Dependencies:** Stage 2 completion

#### Sub-steps:

-   [ ] Seed the RAG database with LER & NIET standards via a script that calls functions in `/app/convex/rag.ts`.
-   [ ] Build the UI for the "Coach Knowledge Base Management" workflow.
-   [ ] Implement the backend subscription logic in `/app/convex/subscriptions.ts` using Polar, including the webhook handler in `/app/convex/http.ts`.
-   [ ] Build the "District Administration" UI for the Admin role, including `UserManagement` and `BillingPortal` components.
-   [ ] Implement the `featureFlags` logic.
-   [ ] Enhance the Agent's capabilities by creating tools with `agent.createTool` in `/app/convex/agent.ts`.
-   [ ] Implement the content export functionality.

---

### Stage 4: Polish & Optimization

**Duration:** 1-2 Weeks
**Dependencies:** Stage 3 completion

#### Sub-steps:

-   [ ] Implement the backend analytics logic in `/app/convex/analytics.ts`.
-   [ ] Build the analytics UI components in `/src/components/features/analytics/`.
-   [ ] Create the `AnalyticsPage` and ensure it displays different data based on Coach vs. Admin roles.
-   [ ] Conduct comprehensive testing based on the defined `userFlows`.
-   [ ] Optimize performance of Convex queries and React component rendering.
-   [ ] Perform a final security and compliance review.
-   [ ] Prepare for the "Founder's Program" pilot deployment.

---

## Resource Links
- [Vite + React Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Convex Database Documentation](https://docs.convex.dev/)
- [Better Auth Kit Convex Adapter](https://www.better-auth-kit.com/docs/adapters/convex)
- [Polar Payments Documentation](https://docs.polar.sh/)
- [@convex-dev/agent Usage Guide (internal)](../convex-components/AGENT.md)
- [@convex-dev/rag Usage Guide (internal)](../convex-components/RAG.md)
- [@better-auth-kit/convex Usage Guide (internal)](../convex-components/BETTER_AUTH.md)
- [@convex-dev/polar Usage Guide (internal)](../convex-components/POLAR.md)
- [@convex-dev/resend Usage Guide (internal)](../convex-components/RESEND.md)
- [Best Practices: Convex Patterns](https://stack.convex.dev/how-convex-works)
- [Tutorial: Convex Chat App](https://docs.convex.dev/tutorials/chat) 