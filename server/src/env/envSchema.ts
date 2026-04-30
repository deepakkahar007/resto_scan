import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DB_PORT: z.string(),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: process.env,
});
