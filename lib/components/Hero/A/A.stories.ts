import { Meta, StoryObj } from "@storybook/react";
import A from ".";

export default {
  title: "Hero",
  component: A,
} as Meta<typeof A>;

export const CarouselA: StoryObj<typeof A> = {
  args: {},
};
