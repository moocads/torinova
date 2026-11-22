import "server-only";
import { z } from "zod";

// Empty strings in .env files count as "not set"
const blankToUndefined = (value: unknown) => (value === "" ? undefined : value);
const optional = <T extends z.ZodType>(schema: T) => z.preprocess(blankToUndefined, schema.optional());
const withDefault = <T extends z.ZodType>(schema: T, fallback: z.input<T>) =>
  z.preprocess(blankToUndefined, schema.default(fallback as never));

// Validated once at startup via instrumentation.ts (Standard §16).
// Server-only — never import this file from a client component.
const envSchema = z.object({
  // Strapi (server-side only)
  STRAPI_URL: withDefault(z.url(), "http://localhost:1337"),
  STRAPI_API_TOKEN: optional(z.string()),
  STRAPI_REVALIDATE_SECRET: optional(z.string()),
  // SendGrid
  SENDGRID_API_KEY: optional(z.string()),
  SENDGRID_FROM_EMAIL: optional(z.email()),
  CONTACT_TO_EMAIL: optional(z.email()),
  // Public
  NEXT_PUBLIC_SITE_URL: withDefault(z.url(), "http://localhost:3000"),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: optional(z.string()),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", z.prettifyError(parsed.error));
  throw new Error("Invalid environment variables — check .env.local");
}

export const env = parsed.data;

export function validateEnv() {
  return env;
}
