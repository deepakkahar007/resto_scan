import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",

  plugins: [adminClient(), organizationClient()],
});

export const signInWithEmail = async (email: string, password: string) => {
  const user = await authClient.signIn.email({
    email,
    password,
    callbackURL: "/dashboard",
  });
  return user;
};

export const signUpWithEmail = async (
  name: string,
  email: string,
  password: string,
) => {
  const user = await authClient.signUp.email({
    name,
    email,
    password,
    callbackURL: "/dashboard",
  });
  return user;
};

export const signOut = async () => {
  const user = await authClient.signOut();
  return user;
};

export const getSession = async () => {
  const session = await authClient.getSession();
  return session;
};

export const createOrganization = async (name: string, userId: string) => {
  const organization = await authClient.organization.create({
    name,
    slug: name.toLowerCase().replace(" ", "-"),
    logo: "http://logo.com",
    userId,
    keepCurrentActiveOrganization: false,
    metadata: {
      createdBy: userId,
      name: "organization creator",
    },
  });

  // Set the newly created organization as active
  if (organization.data?.id) {
    await authClient.organization.setActive({
      organizationId: organization.data.id,
    });
  }

  return organization;
};
