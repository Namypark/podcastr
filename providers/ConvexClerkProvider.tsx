"use client";
import { dark } from "@clerk/themes";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

export const ConvexClerkProvider = ({ children }: { children: ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    appearance={{
      baseTheme: dark,
      variables: {
        colorBackground: "#15171c",
        colorText: "white",
        colorInputBackground: "#1b1f29",
        colorInputText: "white",
      },
      layout: {
        logoImageUrl: "/assets/icons/auth-logo.svg",
        socialButtonsVariant: "iconButton",
        socialButtonsPlacement: "top",
      },
    }}
  >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);
