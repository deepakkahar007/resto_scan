import { index, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { CategoriesTable } from "./CategoriesTable";
import { createdAt, id, isActive, updatedAt } from "./modelsHelper";
import { RestaurentTable } from "./RestaurentTable";

export const SubCategoryTable = pgTable(
	"subcategory",
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
		subcategory: varchar().notNull(),
	},
	(t) => [
		index("subcategory_restaurant_id_idx").on(t.restaurent_id),
		index("subcategory_category_id_idx").on(t.categories_id),
	],
);
