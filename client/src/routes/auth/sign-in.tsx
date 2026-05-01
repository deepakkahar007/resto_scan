import { Button } from "#/components/ui/button";
import {
  authClient,
  createOrganization,
  getSession,
  signInWithEmail,
  signOut,
  signUpWithEmail,
} from "#/integrations/better-auth/auth";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  async function handleSignIn() {
    const user = await signInWithEmail("test@gg.com", "password");
    console.log(user);
  }

  async function handleSignUp() {
    const user = await signUpWithEmail("test user", "test@gg.com", "password");
    console.log(user);
  }

  async function handleSignOut() {
    const user = await signOut();
    console.log(user);
  }

  async function handleGetSession() {
    const user = await getSession();
    console.log(user);
  }

  async function handleCreateOrganization() {
    const user = await getSession();
    const organization = await createOrganization(
      "Test Organization second",
      user?.data?.user.id || "",
    );
    console.log(organization);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-2xl font-bold">Sign In</div>

      <Button onClick={handleSignIn}>Sign In</Button>
      <Button onClick={handleSignUp}>Sign Up</Button>
      <Button onClick={handleSignOut}>Sign Out</Button>
      <Button onClick={handleGetSession}>Get Session</Button>
      <Button onClick={handleCreateOrganization}>Create Organization</Button>
    </div>
  );
}
