import { Elysia } from "elysia";
import { z } from "zod";

export const categoriesRoute = new Elysia({ prefix: "/categories" })
  .get(
    "/",
    async () => {
      return { message: "Categories route" };
    },
    {
      detail: {
        description: "Get all categories",
        summary: "Get all categories",
        tags: ["Categories"],
      },
    },
  )
  .get(
    "/:id",
    async () => {
      return { message: "Category route" };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      detail: {
        description: "Get category by id",
        summary: "Get category by id",
        tags: ["Categories"],
      },
    },
  )
  .post(
    "/",
    async () => {
      return { message: "categories created" };
    },
    {
      body: z.object({
        categories: z.string(),
      }),
      detail: {
        description: "Create a new category",
        summary: "Create a new category",
        tags: ["Categories"],
      },
    },
  )
  .patch(
    "/:id",
    async () => {
      return { message: "categories created" };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      body: z.object({
        categories: z.string(),
      }),
      detail: {
        description: "Update a category",
        summary: "Update a category",
        tags: ["Categories"],
      },
    },
  )
  .delete(
    "/:id",
    async () => {
      return { message: "delete route" };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      detail: {
        description: "",
        summary: "",
        tags: ["Categories"],
      },
    },
  );
