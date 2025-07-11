# UI/UX Documentation for LEAP Forward

## Design System Specifications
- **Design Language:** Clean, modern, accessible, and supportive (coach persona)
- **Color Palette:** Accessible, high-contrast, school-friendly (blues, greens, neutrals)
- **Typography:** Sans-serif, clear hierarchy, large readable sizes
- **Spacing:** Generous padding/margins for clarity and touch targets
- **Iconography:** Simple, meaningful, consistent (education/coaching motifs)
- **Theme:** Light and dark mode support (Tailwind + shadcn/ui)

## UI Component Guidelines
- **Buttons:** Use shadcn/ui Button as base; primary, secondary, destructive, and ghost variants
- **Inputs:** Large, accessible, clear labels; error and help text
- **Cards:** For document previews, analytics, and onboarding steps
- **Dialogs/Modals:** For confirmations, document actions, onboarding
- **Navigation:** Sidebar for main sections (Chat, Documents, Analytics, Knowledge Base, Admin)
- **Tabs:** For switching between document views, analytics, or settings
- **Alerts/Toasts:** For feedback, errors, and confirmations
- **Avatars/Badges:** For user roles and quick identification

## User Experience Flow Diagrams
- **Onboarding:**
  1. First login → Guided tutorial modal (core features)
  2. Sample documents and chat sessions pre-loaded
  3. Progress bar for onboarding completion
- **Document Upload:**
  1. Click "Upload Document" → File picker (.pdf, .docx)
  2. Show upload progress/status (Processing, Ready)
  3. List of user documents with actions (select, delete, export)
- **AI Chat:**
  1. Select document context → Enter chat
  2. Real-time chat interface (input, send, streaming AI response)
  3. Action buttons for content generation (lesson plan, assessment)
  4. Save and view chat history
- **Coach's Knowledge Base:**
  1. Coach role → Access "Coach's Notes" interface
  2. Add/edit notes, tag with standards/indicators
  3. Notes prioritized in AI responses
- **Analytics Dashboard:**
  1. Coach/Admin role → Access dashboard
  2. View aggregated, anonymized data visualizations
  3. No PII or individual chat content

## Responsive Design Requirements
- **Mobile-first:** All features accessible on tablets and phones
- **Breakpoints:** Standard Tailwind breakpoints (sm, md, lg, xl)
- **Touch Targets:** Minimum 44x44px for all interactive elements
- **Navigation:** Collapsible sidebar on mobile, persistent on desktop
- **Tables/Lists:** Horizontal scroll on small screens

## Accessibility Standards
- **WCAG 2.1 AA compliance**
- **Keyboard navigation:** All interactive elements focusable and operable
- **Screen reader support:** Proper ARIA labels, roles, and live regions
- **Color contrast:** Minimum 4.5:1 for text/background
- **Alt text:** All images and icons

## Style Guide and Branding
- **Logo:** School-friendly, simple, and memorable
- **Brand Voice:** Supportive, expert, approachable (coach persona)
- **Button/Link Styles:** Consistent hover/focus/active states
- **Form Elements:** Consistent spacing, error handling, and help text
- **Loading States:** Skeletons or spinners for async actions

## Component Library Organization
- **/src/components/ui/**: shadcn/ui base components (Button, Input, Dialog, etc.)
- **/src/components/**: Custom and composed components (DocumentCard, ChatMessage, AnalyticsChart)
- **/src/pages/**: Page-level layouts (Dashboard, Chat, Analytics, Onboarding)
- **/src/styles/**: Tailwind base, theme overrides, and custom CSS

## User Journey Maps
- **Teacher:**
  - Login → Onboarding → Upload curriculum → Start chat → Generate lesson plan → Export → Review analytics
- **Coach:**
  - Login → Access knowledge base → Add notes → Review analytics → Support teachers via chat
- **Admin:**
  - Login → Manage users/subscriptions → View analytics → Export reports

## Wireframe References
- **Onboarding Modal:** Stepper with progress, feature highlights
- **Document List:** Card/grid view, status badges, action menu
- **Chat Interface:** Message list, input bar, action buttons, context selector
- **Analytics Dashboard:** Card-based metrics, bar/pie charts, filter controls
- **Knowledge Base:** List of notes, add/edit modal, tag filters

## Design Tool Integration
- **Figma:** All wireframes and design system tokens managed in Figma (link to be added)
- **Handoff:** Use Figma Inspect for spacing, color, and component specs

## Resource Links
- [@convex-dev/agent Usage Guide (internal)](../convex-components/AGENT.md)
- [@convex-dev/rag Usage Guide (internal)](../convex-components/RAG.md)
- [@better-auth-kit/convex Usage Guide (internal)](../convex-components/BETTER_AUTH.md)
- [@convex-dev/polar Usage Guide (internal)](../convex-components/POLAR.md)
- [@convex-dev/resend Usage Guide (internal)](../convex-components/RESEND.md)
> Note: These are internal documentation files for backend/integration reference, not UI/UX docs.

---
For detailed component specs and updates, see the Figma file (to be linked here). 