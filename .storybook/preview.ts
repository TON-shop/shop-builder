import type { Preview } from "@storybook/react";
import "../src/styles/index.css";
import "tailwindcss/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
