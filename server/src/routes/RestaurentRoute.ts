import { Elysia } from "elysia";
import { createRestaurentSchema } from "../schema/restaurentSchema";
import { z } from "zod";

const createRestaurentInputSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export const restaurentRoute = new Elysia({ prefix: "/restaurent" }).post(
  "/",

  async ({ body }) => {
    return { message: "Restaurant created successfully" };
  },
  {
    body: createRestaurentInputSchema,
    detail: {
      description: "Create a new restaurant",
      summary: "Create a new restaurant",
      tags: ["Restaurent"],
    },
  },
);
