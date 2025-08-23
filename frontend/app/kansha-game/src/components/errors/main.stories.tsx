import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MainErrorFallback } from "./main";

const meta: Meta<typeof MainErrorFallback> = {
  component: MainErrorFallback,
};

export default meta;
type Story = StoryObj<typeof MainErrorFallback>;

export const Default: Story = {};
