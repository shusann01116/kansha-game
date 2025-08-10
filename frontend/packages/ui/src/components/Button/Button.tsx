import { Button as HeadlessButton } from "@headlessui/react";
import { ComponentProps } from "react";

export const Button = ({ children, ...rest }: ComponentProps<"button">) => {
  return <HeadlessButton {...rest}>{children}</HeadlessButton>;
};
