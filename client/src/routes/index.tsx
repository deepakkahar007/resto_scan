import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 bg-dark-gray h-screen flex flex-col items-center justify-center gap-5">
      <h3 className="text-white">Welcome Home!</h3>

      <Link to="/user/$restaurentId" params={{ restaurentId: "123" }}>
        <Button>Go to Restaurent order page</Button>
      </Link>
    </div>
  );
}
