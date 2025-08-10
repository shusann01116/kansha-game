"use client";

import { Drawer, IconButton, Portal, Box } from "@chakra-ui/react";
import { X, Menu as MenuIcon } from "lucide-react";
import { ToggleThemeButton } from "./color-theme";

export const Menu = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header></Drawer.Header>
            <Drawer.Body></Drawer.Body>
            <Drawer.Footer>
              <ToggleThemeButton />
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <Box padding="2">
                <X />
              </Box>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
