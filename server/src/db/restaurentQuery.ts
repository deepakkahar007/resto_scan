import { eq } from "drizzle-orm";
import {
  RestaurentTable,
  type CreateRestaurentType,
} from "@/drizzle/models/RestaurentTable";
import { db } from "@/drizzle/db";

export const getAllRestaurent = async () => {
  const restaurent = await db.query.RestaurentTable.findMany();
  return restaurent;
};

export const getRestaurentDetailsById = async (id: string) => {
  const restaurent = await db.query.RestaurentTable.findFirst({
    where: {
      id: id,
    },
  });
  return restaurent;
};

export const createRestaurent = async (data: CreateRestaurentType) => {
  const [row] = await db
    .insert(RestaurentTable)
    .values(data)
    .returning({ id: RestaurentTable.id });
  return row;
};

export const updateRestaurent = async (
  id: string,
  data: CreateRestaurentType,
) => {
  const [row] = await db
    .update(RestaurentTable)
    .set(data)
    .where(eq(RestaurentTable.id, id))
    .returning({ id: RestaurentTable.id });
  return row;
};

export const deleteRestaurentById = async (id: string) => {
  const [row] = await db
    .delete(RestaurentTable)
    .where(eq(RestaurentTable.id, id))
    .returning({ id: RestaurentTable.id });
  return row;
};

export const disableRestaurentById = async (id: string) => {
  const [row] = await db
    .update(RestaurentTable)
    .set({ isActive: false })
    .where(eq(RestaurentTable.id, id))
    .returning({ id: RestaurentTable.id });
  return row;
};
