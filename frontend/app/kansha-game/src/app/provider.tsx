"use client";

import { MainErrorFallback } from "@/components/errors/main";
import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <SessionProvider>
        <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
};
