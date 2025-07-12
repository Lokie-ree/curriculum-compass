# UI/UX Documentation for Curriculum Compass (v1.0)

This document outlines the user interface (UI) components, user experience (UX) flows, and design system specifications for the Curriculum Compass application. It serves as the primary guide for all frontend development to ensure a consistent, intuitive, and accessible user experience.

## 1. Design System & Style Guide

The design philosophy is clean, professional, and supportive, prioritizing clarity and ease of use to minimize cognitive load on busy educators.

*   **Component Library:** `shadcn/ui` provides the foundational, accessible components (Buttons, Cards, Inputs, etc.). All custom components will be built on this foundation.
*   **Styling:** Tailwind CSS will be used for all styling, ensuring consistency and maintainability.
*   **Color Palette:** A professional and calm palette will be used, featuring a primary accent color for calls-to-action, neutral tones for backgrounds and text, and semantic colors for success, warning, and error states.
*   **Typography:** A single, highly-readable sans-serif font (e.g., Inter) will be used throughout the application. A clear typographic scale (e.g., h1, h2, p, small) will establish visual hierarchy.
*   **Iconography:** A consistent icon set from `lucide-react` will be used to provide clear visual cues for navigation and actions, as it integrates seamlessly with `shadcn/ui`.

## 2. Navigation Structure

Navigation is role-based and responsive. On desktop, a persistent sidebar will be used. On mobile devices, the sidebar will be replaced by a `Sheet` component (slide-out menu) for a better user experience.

### 2.1. Teacher Navigation

*   **Primary Navigation:**
    *   **Dashboard:** (`/dashboard`) - `Home` icon.
    *   **My Documents:** (`/documents`) - `FileText` icon.
    *   **AI Assistant:** (`/chat`) - `MessageCircle` icon.
*   **Secondary Navigation (User Menu/Header):**
    *   **Profile:** (`/profile`) - `User` icon.
    *   **Help & Support:** (`/help`) - `HelpCircle` icon.

### 2.2. Coach Navigation

*   **Primary Navigation:**
    *   **Dashboard:** (`/dashboard`) - `Home` icon.
    *   **Knowledge Base:** (`/knowledge-base`) - `BookOpen` icon.
    *   **Teacher Analytics:** (`/analytics`) - `BarChart` icon.

### 2.3. Admin Navigation

*   **Primary Navigation:**
    *   **Dashboard:** (`/dashboard`) - `Home` icon.
    *   **User Management:** (`/users`) - `Users` icon.
    *   **Billing:** (`/billing`) - `CreditCard` icon.
    *   **District Analytics:** (`/analytics`) - `TrendingUp` icon.

## 3. User Experience Flows

The following user flows, derived from our project specifications, detail the step-by-step journey for key tasks.

### 3.1. Teacher First-Time Onboarding (`teacher_onboarding`)

*   **Objective:** To welcome new teachers, gather essential profile information, and quickly guide them to the app's core value.
*   **Flow:**
    1.  **Welcome Screen:** User is greeted with a modal (`WelcomeModal`) explaining the app's value.
    2.  **Profile Setup:** User is prompted to complete their profile (`ProfileForm`).
    3.  **First Document Upload:** User is encouraged (optionally) to upload their first curriculum document using the `DocumentUpload` component.
    4.  **Feature Tour:** An interactive tour highlights the key UI elements.

### 3.2. Document Upload and Processing (`document_workflow`)

*   **Objective:** To provide a clear and seamless process for uploading documents and preparing them for AI interaction.
*   **Flow:**
    1.  **File Selection:** User selects a `.pdf` or `.docx` file via the `DocumentUploader` component.
    2.  **Upload Progress:** A `ProgressBar` provides visual feedback.
    3.  **AI Processing:** A `ProcessingSpinner` indicates that the backend is parsing, vectorizing, and indexing the document via the RAG component workflow.
    4.  **Ready Notification:** A `SuccessMessage` confirms the document is ready, with calls-to-action to "Start Chat" or "Upload Another."

### 3.3. AI Chat Session (`chat_interaction`)

*   **Objective:** To provide a powerful yet intuitive interface for teachers to get AI-powered support.
*   **Flow:**
    1.  **Context Selection:** User selects a document from the `DocumentList` to serve as context.
    2.  **Conversation:** The `ChatInterface` displays message history and provides a `ChatInput`. A typing indicator shows when the AI is generating a response.
    3.  **Quick Actions:** `ActionButtons` will be present, allowing the user to trigger complex prompts like "Generate Lesson Plan" or "Check Standards Alignment."

### 3.4. Coach Knowledge Base Management (`coach_workflow`)

*   **Objective:** To allow expert coaches to easily contribute their knowledge to the system.
*   **Flow:**
    1.  **Access:** Coach navigates to the "Knowledge Base" section.
    2.  **Add Note:** The coach uses a `NoteEditor` to add a new "Coach's Note," which will be given the highest priority in the RAG knowledge base.
    3.  **Review Analytics:** The coach can navigate to the `AnalyticsDashboard` to review trends.

### 3.5. District Administration (`admin_workflow`)

*   **Objective:** To provide a centralized hub for admins to manage their district's account.
*   **Flow:**
    1.  **User Management:** Admin uses the `UserManagement` interface to invite and manage users.
    2.  **Subscription Management:** Admin navigates to the `BillingPortal` to manage their subscription through the integrated Polar interface.
    3.  **District Overview:** Admin views high-level adoption and usage metrics on the `DistrictAnalytics` dashboard.

## 4. Accessibility & Responsive Design

*   **Accessibility:** The application must adhere to WCAG 2.1 AA standards. This includes providing sufficient color contrast, keyboard navigability, screen reader support (ARIA labels), and focus management.
*   **Responsive Design:** All interfaces must be fully responsive. The primary navigation will transition from a fixed sidebar on desktop to a slide-out `Sheet` menu on mobile breakpoints to ensure optimal usability on all devices.

---