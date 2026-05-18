import { openapi } from "@elysia/openapi";
import { Elysia } from "elysia";
import { z } from "zod";

const app = new Elysia()
  .use(
    openapi({
      mapJsonSchema: {
        zod: z.toJSONSchema,
      },
    }),
  )
  .onError(({ code, error }) => {
    if (code === "VALIDATION") {
      return { error: error.messageValue?.message || "Validation error" };
    }
  })
  .get("/", () => ({ msg: "hello world" }))
  .post(
    "/user/:id",
    async ({ params, body }) => {
      const { id } = params;
      const { name } = body;
      return { msg: "user created", id, name };
    },
    {
      params: z.object({
        id: z.string().min(3, "the 3 required"),
      }),
      body: z.object({
        name: z.string().nonempty(),
      }),
      detail: {
        description: "Expected a username and password",
        summary: "Sign in the user",
        tags: ["authentication"],
        responses: {
          200: {
            description: "user created",
          },
        },
      },
    },
  ).listen(3000, ({url}) => {
    console.log(`Server is running on ${url}`);
  });

export default app;
