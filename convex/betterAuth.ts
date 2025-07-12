import { action, internalQuery, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { ConvexHandler, type ConvexReturnType } from "@better-auth-kit/convex/handler";

const handler: ConvexReturnType = ConvexHandler({
  action,
  internalQuery,
  internalMutation,
  internal,
});
const { betterAuth, query, insert, update, delete_, count, getSession } = handler;

export { betterAuth, query, insert, update, delete_, count, getSession }; 