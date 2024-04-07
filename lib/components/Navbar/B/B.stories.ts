import { Meta, StoryObj } from "@storybook/react";
import B from ".";

export default {
  title: "Navbar",
  component: B,
} as Meta<typeof B>;

export const CarouselB: StoryObj<typeof B> = {
  args: { navbarItems: ["person", "logout", "menu", "description"] },
};
