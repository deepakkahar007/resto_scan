import { index, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { CategoriesTable } from "./CategoriesTable";
import {
	createdAt,
	ItemTypeEnum,
	id,
	isActive,
	updatedAt,
} from "./modelsHelper";
import { RestaurentTable } from "./RestaurentTable";

export const ItemTable = pgTable(
	"item",
	{
		id,
		isActive,
		createdAt,
		updatedAt,

		restaurent_id: uuid()
			.notNull()
			.references(() => RestaurentTable.id),
		categories_id: uuid()
			.notNull()
			.references(() => CategoriesTable.id),

		name: varchar().notNull(),
		description: text().notNull(),
		item_type: ItemTypeEnum().notNull(),
	},
	(t) => [
		index("item_restaurant_id_idx").on(t.restaurent_id),
		index("item_category_id_idx").on(t.categories_id),
	],
);
