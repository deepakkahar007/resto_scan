import { Elysia } from "elysia";
import {
  createRestaurentSchema,
  updateRestaurentSchema,
} from "../schema/restaurentSchema";
import { z } from "zod";
import { createRestaurent, getAllRestaurent } from "@/db/restaurentQuery";

export const restaurentRoute = new Elysia({ prefix: "/restaurent" })
  .get(
    "/",
    async () => {
      const restauernt = await getAllRestaurent();
      return { message: "All restaurants", restauernt };
    },
    {
      detail: {
        description: "Get all restaurants",
        summary: "Get all restaurants",
        tags: ["Restaurent"],
      },
    },
  )
  .get(
    "/:id",
    async ({ params }) => {
      return { message: "Restaurant", params };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      detail: {
        description: "Get a restaurant",
        summary: "Get a restaurant",
        tags: ["Restaurent"],
      },
    },
  )
  .post(
    "/",
    async ({ body }) => {
      const bodyData = body;

      const createdRestaurentId = await createRestaurent(bodyData);

      return {
        message: "Restaurant created successfully",
        id: createdRestaurentId?.id,
      };
    },
    {
      body: createRestaurentSchema,
      detail: {
        description: "Create a new restaurant",
        summary: "Create a new restaurant",
        tags: ["Restaurent"],
      },
    },
  )
  .patch(
    "/:id",
    async ({ params, body }) => {
      return { message: "Restaurant updated successfully", params, body };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      body: updateRestaurentSchema,
      detail: {
        description: "Update a restaurant",
        summary: "Update a restaurant",
        tags: ["Restaurent"],
      },
    },
  )
  .delete(
    "/:id",
    async ({ params }) => {
      return { message: "Restaurant deleted successfully", params };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      detail: {
        description: "Delete a restaurant",
        summary: "Delete a restaurant",
        tags: ["Restaurent"],
      },
    },
  );
