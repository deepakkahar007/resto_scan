import { createInsertSchema, createUpdateSchema } from "drizzle-orm/zod";
import { RestaurentTable } from "../drizzle/models/index";
import { z } from "zod";

export const createRestaurentSchema = createInsertSchema(
  RestaurentTable,
  {},
).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateRestaurentSchema = createUpdateSchema(
  RestaurentTable,
  {},
).omit({
  createdAt: true,
  updatedAt: true,
});
