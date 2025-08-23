"use client";

import { HeroUIProvider } from "@heroui/react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
