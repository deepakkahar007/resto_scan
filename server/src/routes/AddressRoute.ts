import {
  createAddressSchema,
  updateAddressSchema,
} from "@/schema/addressSchema";
import { Elysia } from "elysia";
import { z } from "zod";

export const addressRoute = new Elysia({ prefix: "/address" })
  .get(
    "/",
    async () => {
      return { message: "Address route" };
    },
    {
      detail: {
        description: "Get all addresses",
        summary: "Get all addresses",
        tags: ["Address"],
      },
    },
  )
  .get(
    "/:id",
    async () => {
      return { message: "Address route" };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      detail: {
        description: "Get address by id",
        summary: "Get address by id",
        tags: ["Address"],
      },
    },
  )
  .post(
    "/",
    async () => {
      return { message: "Address route" };
    },
    {
      body: createAddressSchema,
      detail: {
        description: "Create address",
        summary: "Create address",
        tags: ["Address"],
      },
    },
  )
  .patch(
    "/:id",
    async () => {
      return { message: "Address route" };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      body: updateAddressSchema,
      detail: {
        description: "Update address",
        summary: "Update address",
        tags: ["Address"],
      },
    },
  )
  .delete(
    "/:id",
    async () => {
      return { message: "delete address" };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      detail: {
        description: "Delete address",
        summary: "Delete address",
        tags: ["Address"],
      },
    },
  );
