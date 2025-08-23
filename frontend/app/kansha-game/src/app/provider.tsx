"use client";

import { MainErrorFallback } from "@/components/errors/main";
import { HeroUIProvider } from "@heroui/react";
import { ErrorBoundary } from "react-error-boundary";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ErrorBoundary>
  );
};
