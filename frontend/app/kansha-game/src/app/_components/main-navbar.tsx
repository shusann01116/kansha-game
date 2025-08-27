"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import Link from "next/link";

export const MainNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand className="text-xl font-bold">Kansha</NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" variant="flat" href="/login">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
