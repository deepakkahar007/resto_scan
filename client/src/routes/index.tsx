import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="container mx-auto p-4 h-screen ">
      <h1 className="text-4xl font-bold">tanstack start</h1>
    </div>
  );
}
