import { createInsertSchema, createUpdateSchema } from "drizzle-orm/zod";
import { AddressTable } from "@/drizzle/models/AddressTable";

export const createAddressSchema = createInsertSchema(AddressTable, {}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateAddressSchema = createUpdateSchema(AddressTable, {}).omit({
  createdAt: true,
  updatedAt: true,
});
