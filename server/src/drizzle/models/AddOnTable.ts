import { index, integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { ItemTable } from "./ItemTable";
import { createdAt, id, isActive, updatedAt } from "./modelsHelper";

export const AddOnTable = pgTable(
	"addon",
	{
		id,
		isActive,
		createdAt,
		updatedAt,

		item_id: uuid()
			.notNull()
			.references(() => ItemTable.id),
		addon_name: varchar().notNull(),
		price: integer().notNull(),
	},
	(t) => [index("addon_item_id_idx").on(t.item_id)],
);
