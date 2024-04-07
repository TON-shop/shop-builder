import { Meta, StoryObj } from "@storybook/react";
import A from ".";

export default {
  title: "Carousel",
  component: A,
} as Meta<typeof A>;

export const CarouselA: StoryObj<typeof A> = {
  args: { heroItems: ["accountBalance", "analytics"] },
};
