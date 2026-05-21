import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(USER)/user/$restaurantId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { restaurantId } = Route.useParams();
  return (
    <div className="mt-20 h-screen container mx-auto">
      <h1>Welcome to the Overview for Restaurant: {restaurantId}</h1>
    </div>
  );
}
