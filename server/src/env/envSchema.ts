import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		DB_USER: z.string(),
		DB_PASSWORD: z.string(),
		DB_NAME: z.string(),
		DB_PORT: z.string(),
	},
	createFinalSchema: (env) => {
		return z.object(env).transform((val) => {
			const { DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, ...rest } = val;

			return {
				...rest,
				DATABASE_URL: `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`,
			};
		});
	},
	emptyStringAsUndefined: true,
	runtimeEnv: process.env,
});
