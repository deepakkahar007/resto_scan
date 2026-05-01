import { Button } from "#/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="container mx-auto p-4 h-screen ">
      <h1 className="text-4xl font-bold">tanstack start</h1>
      <Link to="/auth/sign-in">
        <Button>Go to Sign In</Button>
      </Link>
    </div>
  );
}
