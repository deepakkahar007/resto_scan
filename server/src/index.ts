import { cors } from "@elysia/cors";
import { openapi } from "@elysia/openapi";
import { Elysia } from "elysia";
import * as z from "zod";
import { betterAuthView } from "./lib/auth";

const app = new Elysia({ prefix: "/api" })
  .use(cors({ origin: ["http://localhost:5173"], credentials: true }))
  .use(
    openapi({
      mapJsonSchema: {
        zod: z.toJSONSchema,
      },
    }),
  )
  .all("/auth/*", betterAuthView)
  .get("/", () => {
    return {
      msg: "Hello Elysia",
    };
  })
  .get("/stream", function* () {
    yield "Hello";
    yield "World";
  });

app.listen(3000, ({ hostname, port }) => {
  console.log(`🦊 Elysia is running at ${hostname}:${port}`);
});
