import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(RESTAURENT)/restaurent/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(RESTAURENT)/restaurent/dashboard"!</div>;
}
