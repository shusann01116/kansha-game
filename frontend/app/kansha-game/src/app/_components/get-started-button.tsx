"use client";

import { Button, Link } from "@heroui/react";

export const GetStartedButton = () => {
  return (
    <Button as={Link} href="/sign-up" color="primary">
      さっそくはじめる
    </Button>
  );
};
