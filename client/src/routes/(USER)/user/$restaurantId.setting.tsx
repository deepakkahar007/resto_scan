import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(USER)/user/$restaurantId/setting")({
  component: RouteComponent,
});

function RouteComponent() {
  const { restaurantId } = Route.useParams(); // Still accessible!
  return <h1>Settings Panel for Restaurant: {restaurantId}</h1>;
}
