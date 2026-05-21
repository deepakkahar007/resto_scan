import { Elysia } from "elysia";
import { betterAuthHandler } from "./lib/auth";
import { restaurentRoute } from "./routes/RestaurentRoute";
import { openApiMiddleware } from "./middleware/openApiMiddleware";
import { addressRoute } from "./routes/AddressRoute";
import { categoriesRoute } from "./routes/CategoriesRoute";

const app = new Elysia()
  .use(openApiMiddleware)
  .onError(({ code, error }) => {
    if (code === "VALIDATION") {
      return { error: error.valueError?.message || "Validation error" };
    }
  })
  .all("/api/auth/*", betterAuthHandler)
  .use(restaurentRoute)
  .use(addressRoute)
  .use(categoriesRoute)

  .get(
    "/health",
    { status: "OK" },
    {
      detail: {
        description: "Health check endpoint",
        tags: ["health"],
        responses: {
          200: {
            description: "health check",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "OK",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  )
  .listen(3000, ({ url }) => {
    console.log(`Server is running on ${url}`);
  });

export default app;
