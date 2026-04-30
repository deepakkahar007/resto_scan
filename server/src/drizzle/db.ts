import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/env/envSchema";
import * as schema from "./models";
import { relations } from "./models/relations";

const client = postgres(env.DATABASE_URL);

export const db = drizzle({ client, schema, relations });
