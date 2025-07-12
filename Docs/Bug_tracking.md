# Bug Tracking Log

This file is used to document all bugs, errors, and issues encountered during development. Please follow the template below for each entry. Update this log whenever a bug is found or resolved.

---

## Bug Report Template

**Date Reported:** [YYYY-MM-DD]
**Reported By:** [Name or GitHub handle]
**Environment:** [Development/Production/OS/Browser/etc.]

**Description:**
- [Brief summary of the bug]

**Steps to Reproduce:**
1. [First step]
2. [Second step]
3. ...

**Expected Behavior:**
- [What should happen]

**Actual Behavior:**
- [What actually happens]

**Error Details/Logs:**
- [Paste error messages, stack traces, screenshots, etc.]

**Root Cause Analysis:**
- [Describe the underlying cause if known]

**Resolution Steps:**
- [How the bug was fixed]

**Status:** [Open/Resolved/Closed]
**Related Files/Commits:** [Links or references]

---

## Bug Log

| Date       | Description                                              | Status   | Reported By | Resolution/Notes         |
|------------|----------------------------------------------------------|----------|-------------|--------------------------|
| 2025-07-12 | ConvexHandler betterAuth property type error             | Resolved | user        | Moved handler to convex/betterAuth.ts as per docs |
| 2025-07-12 | ConvexHttpClient error: undefined deployment address     | Resolved | user        | Removed convex/auth.ts, only use handler in backend |
| 2025-07-12 | Nothing rendering at /dashboard due to nested routing    | Resolved | user        | Refactored AppLayout to use Outlet and nested routes |

---

> **Instructions:**
> - Add a new entry for each bug using the template above.
> - Update the status and resolution as progress is made.
> - Reference related files, commits, or issues where possible.
> - Keep this log up to date for team visibility and project health. 