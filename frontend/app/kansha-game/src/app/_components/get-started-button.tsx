"use client";

import { Button, Link } from "@heroui/react";

export const GetStartedButton = () => {
  return (
    <Button as={Link} href="/login" color="primary">
      さっそくはじめる
    </Button>
  );
};
