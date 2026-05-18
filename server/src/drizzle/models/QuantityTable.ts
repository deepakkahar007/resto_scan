import { index, integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { ItemTable } from "./ItemTable";
import { createdAt, id, isActive, updatedAt } from "./modelsHelper";

export const QuantityTable = pgTable(
	"quantity",
	{
		id,
		isActive,
		createdAt,
		updatedAt,

		item_id: uuid()
			.notNull()
			.references(() => ItemTable.id),
		quantity: varchar().notNull(),
		price: integer().notNull(),
		discounted_price: integer().notNull(),
	},
	(t) => [index("quantity_item_id_idx").on(t.item_id)],
);
