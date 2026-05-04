import { boolean, index, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { AddressTable } from "./AddressTable";
import { createdAt, id, isActive, updatedAt } from "./modelsHelper";
import { RestaurentTable } from "./RestaurentTable";

export const CategoriesTable = pgTable(
	"categories",
	{
		id,
		isActive,
		createdAt,
		updatedAt,

		restaurent_id: uuid()
			.notNull()
			.references(() => RestaurentTable.id),

		address_id: uuid()
			.notNull()
			.references(() => AddressTable.id),

		category: varchar().notNull(),
		icon: varchar(),
		pin_to_top: boolean().default(false),
	},
	(t) => [
		index("categories_restaurant_id_idx").on(t.restaurent_id),
		index("categories_address_id_idx").on(t.address_id),
	],
);
