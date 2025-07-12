# Better Auth with Convex Integration

## Overview

Better Auth is a modern authentication library that can be integrated with Convex databases using the `@better-auth-kit/convex` adapter. This integration allows Better Auth to communicate with your Convex DB, though it has some limitations and specific setup requirements.

## Official Repository
https://github.com/get-convex/better-auth/tree/main/examples/react

## Package Information

- **Package**: `@better-auth-kit/convex`
- **Version**: 1.2.2
- **License**: MIT
- **Documentation**: https://www.better-auth-kit.com/docs/adapters/convex

## Limitations

⚠️ **Important Note**: This isn't full Convex integration - hosting Better Auth endpoints on Convex is not possible with this library.

### Key Limitations:

1. **Performance Issues**: Due to inability to perform dynamic queries/mutations, requests are sent to Convex Actions, which then call mutate/query functions. This results in at least two calls per operation.

2. **No `sortBy` Support**: Better Auth requires sorting at individual field level, while Convex only supports table-level sorting.

3. **Degraded Pagination Performance**: Convex's limited pagination support may cause performance issues.

4. **Missing Operators**: No support for `starts_with`, `ends_with`, or `contains` operators (mainly affects admin plugin).

## Benefits

✅ **Advantages**:

- Workaround for Convex's lack of dynamic queries/mutations
- Enables Better Auth usage with Convex backend
- Can leverage dynamic queries/mutations in your own codebase
- Best option for using Better Auth with Convex

## Installation

```bash
npm install @better-auth-kit/convex
```

## Setup

### 1. Initialize Convex Database Adapter

In your Better Auth server instance:

```typescript
import { betterAuth } from "better-auth";
import { convexAdapter } from "@better-auth-kit/convex";
import { ConvexHttpClient } from "convex/browser";

const convexClient = new ConvexHttpClient(process.env.CONVEX_URL!);

export const auth = betterAuth({
  database: convexAdapter(convexClient),
  plugins: [],
  // ... other options
});
```

### 2. Create Convex Handler

Create `convex/betterAuth.ts` (exact filename and location required):

```typescript
import { action, internalQuery, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { ConvexHandler, type ConvexReturnType } from "@better-auth-kit/convex/handler";

const { betterAuth, query, insert, update, delete_, count, getSession } = ConvexHandler({
  action,
  internalQuery,
  internalMutation,
  internal,
}) as ConvexReturnType;

export { betterAuth, query, insert, update, delete_, count, getSession };
```

**Note**: Run `convex dev` for Convex to generate the required types.

## Important Notes

1. **Don't use `auth` instance in Convex files** - unexpected errors may occur as Better Auth isn't designed for Convex environments.

2. **Session verification in Convex functions** - use the `getSession` query.

3. **Endpoint hosting** - Better Auth endpoints must be hosted using supported integrations, not on Convex.

## Session Verification in Convex Functions

Use the `getSession` query to verify user sessions:

```typescript
const session = await ctx.runQuery(internal.betterAuth.getSession, {
  sessionToken: "the user's session token",
});
```

### Example Usage

```typescript
import { mutation, v } from "./_generated/server";

export const deleteMessage = mutation({
  args: { messageId: v.id("chat"), sessionToken: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.runQuery(internal.betterAuth.getSession, {
      sessionToken: args.sessionToken,
    });

    if (!session) {
      throw new Error("Unauthorized");
    }

    const message = await ctx.db.get(args.messageId);
    if (!message) {
      throw new Error("Message not found");
    }

    await ctx.db.delete(args.messageId);
  },
});
```

## Dynamic Database Operations

The adapter provides dynamic database operations:

```typescript
import { auth } from "./auth";

const adapter = (await auth.$context).adapter;

// Create a row
await adapter.create({
  model: "user",
  data: {
    name: "some-user",
    email: "some-user@example.com",
    password: "password",
  },
});

// Update a row
await adapter.update({
  model: "user",
  where: [
    {
      field: "name",
      value: "some-user",
    },
  ],
  update: {
    name: "some-other-name",
  },
});

// Get multiple rows
await adapter.findMany({
  model: "user",
  where: [
    {
      field: "name",
      value: "some-user",
    },
  ],
});

// Delete rows
await adapter.delete({
  model: "user",
  where: [
    {
      field: "name",
      value: "some-user",
    },
  ],
});

// Count rows
await adapter.count({
  model: "user",
  where: [
    {
      field: "name",
      value: "some-user",
    },
  ],
});
```

## JWT Plugin Configuration

For JWT plugin with Convex, use the `RS256` algorithm:

```typescript
import { jwt } from "better-auth/plugins";

export const auth = betterAuth({
  database: convexAdapter(convexClient),
  plugins: [
    jwt({
      algorithm: "RS256",
    }),
  ],
});
```

## Schema Generation

Traditional `@better-auth/cli` schema generation may cause issues due to Convex's limitations with the `fs` module. A custom CLI (`@better-auth-kit/cli`) is planned for schema generation.

## Resources

- [Better Auth Kit Documentation](https://www.better-auth-kit.com/docs/adapters/convex)
- [NPM Package](https://www.npmjs.com/package/@better-auth-kit/convex)
- [GitHub Repository](https://github.com/ping-maxwell/better-auth-kit)
- [Minimal Implementation Example](https://github.com/juliusmarminge)

## Weekly Downloads
259 (as of latest data)

## Alternative Convex Auth Solutions

If Better Auth doesn't meet your needs, consider:
- [Convex Auth](https://docs.convex.dev/auth) (official)
- [Clerk integration](https://docs.convex.dev/auth/clerk)
- [Auth0 integration](https://docs.convex.dev/auth/auth0)
- [Kinde integration](https://dev.to/sholajegede/convex-kinde-2pe1)