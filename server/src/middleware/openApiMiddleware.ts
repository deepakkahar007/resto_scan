import openapi from "@elysia/openapi";
import { z } from "zod";

export const openApiMiddleware = () => {
  return openapi({
    mapJsonSchema: {
      zod: z.toJSONSchema,
    },
    scalar: {
      snippetTargets: [
        {
          target: "javascript",
          client: "fetch",
        },
        {
          target: "node",
          client: "fetch",
        },
        {
          target: "shell",
          client: "curl",
        },
      ],
      defaultCodeSampleClient: {
        target: "node",
        client: "fetch",
      },
    },
  });
};
