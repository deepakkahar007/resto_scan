import { cors } from "@elysia/cors";
import { openapi } from "@elysia/openapi";
import { Elysia } from "elysia";
import * as z from "zod";

const app = new Elysia({ prefix: "/api" })
  .use(cors({ origin: ["http://localhost:3001"] }))
  .use(
    openapi({
      mapJsonSchema: {
        zod: z.toJSONSchema,
      },
    }),
  )
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
