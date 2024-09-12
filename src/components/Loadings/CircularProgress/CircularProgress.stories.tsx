import type { Meta, StoryObj } from "@storybook/react"

import { CircularProgress } from "./CircularProgress"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Feedback/Loadings/CircularProgress",
  component: CircularProgress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    color: "info",
    variant: "indeterminate",
    value: 75,
  },
  argTypes: {
    variant: {
      options: ["indeterminate", "determinate"],
      control: { type: "select" },
      description: "`indeterminate` `determinate`",
    },
    value: {
      type: "number",
      description:
        "if the `variant` option is `determinate` you can select a value from `0` to `100` that will fill in the amount of progress",
    },
    color: {
      type: "string",
      control: { type: "text" },
      description:
        "`primary` `secondary` `error` `info` `success` `warning` `inherit` or ",
    },
  },
} satisfies Meta<typeof CircularProgress>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {}
