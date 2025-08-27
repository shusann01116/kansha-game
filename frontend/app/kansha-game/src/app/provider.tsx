"use client";

import { MainErrorFallback } from "@/components/errors/main";
import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
    </ErrorBoundary>
  );
};
