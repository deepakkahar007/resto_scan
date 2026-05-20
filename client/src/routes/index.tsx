import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 bg-dark-gray">
      <h3 className="text-white">Welcome Home!</h3>

      <Button>Click me</Button>
    </div>
  );
}
