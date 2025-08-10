"use client";

import { IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ToggleThemeButton = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const onClick = () => {
    console.log({ theme: theme });
    if (theme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };

  return (
    <IconButton onClick={onClick}>
      {theme === "light" ? <Sun /> : <Moon />}
    </IconButton>
  );
};
