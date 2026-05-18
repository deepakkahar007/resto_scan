import { index, pgTable, text, varchar } from "drizzle-orm/pg-core";
import {
	CuisineEnum,
	createdAt,
	id,
	isActive,
	updatedAt,
} from "./modelsHelper";

export const RestaurentTable = pgTable(
	"restaurent",
	{
		id,
		isActive,
		createdAt,
		updatedAt,

		organization_id: varchar().notNull(),

		name: varchar().notNull(),
		slug: varchar().notNull(),
		description: text().notNull(),
		categories: varchar().notNull(),
		icon: varchar().notNull(),
		cover_image: varchar(),
		cuisine: CuisineEnum().notNull(),
	},
	(t) => [index("restaurent_organization_id_idx").on(t.organization_id)],
);

export type CreateRestaurentType = typeof RestaurentTable.$inferInsert;
export type SelectRestaurentType = typeof RestaurentTable.$inferSelect;
