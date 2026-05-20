import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(USER)/user/$restaurentId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { restaurentId } = Route.useParams();
  return (
    <div>
      <nav>Restaurant {restaurentId} Navigation Sidebar</nav>
      {/* Child routes (index, setting, transactions) will render here */}
      <Outlet />
    </div>
  );
}
