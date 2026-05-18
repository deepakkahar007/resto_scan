import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
  createSchemaFactory,
} from "drizzle-orm/zod";
import { RestaurentTable } from "../drizzle/models/index";

export const createRestaurentSchema = createInsertSchema(RestaurentTable, {});
