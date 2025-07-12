import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(),
    role: v.union(v.literal("teacher"), v.literal("coach"), v.literal("admin")),
    organizationId: v.id("organizations"),
    createdAt: v.number(),
  }).index("by_email", ["email"]).index("by_organization", ["organizationId"]),

  organizations: defineTable({
    name: v.string(),
    districtCode: v.string(),
    createdAt: v.number(),
  }).index("by_districtCode", ["districtCode"]),

  subscriptions: defineTable({
    organizationId: v.id("organizations"),
    status: v.string(), // e.g., active, trialing, canceled
    plan: v.string(),
    currentPeriodEnd: v.number(),
    createdAt: v.number(),
  }).index("by_organization", ["organizationId"]),
});
