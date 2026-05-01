import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, organization } from "better-auth/plugins";
import type { Context } from "elysia";
import { db } from "../drizzle/db";

export const auth = betterAuth({
  baseURL: "http://localhost:3000",
  trustedOrigins: ["http://localhost:5173"],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days,
      strategy: "jwt",
    },
  },
  rateLimit: {
    window: 5 * 60 * 1000,
    max: 10,
  },
  plugins: [admin(), organization()],
});

export const betterAuthView = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
  // validate request method
  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    return auth.handler(context.request);
  } else {
    context.status(405);
  }
};
