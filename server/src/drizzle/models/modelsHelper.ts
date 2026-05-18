import { boolean, pgEnum, timestamp, uuid } from "drizzle-orm/pg-core";

export const id = uuid("id").primaryKey().defaultRandom();

export const isActive = boolean("is_active").notNull().default(true);

export const createdAt = timestamp("created_at").notNull().defaultNow();

export const updatedAt = timestamp("updated_at")
	.notNull()
	.defaultNow()
	.$onUpdate(() => new Date());

// enums
export const CuisineEnum = pgEnum("cuisine", [
	"indian",
	"chinese",
	"italian",
	"mexican",
	"american",
	"other",
]);

export const ItemTypeEnum = pgEnum("item_type", [
	"veg",
	"non_veg",
	"egg",
	"drink",
	"other",
]);
