import type { Meta, StoryObj } from "@storybook/react"

import { LinearProgress } from "./LinearProgress"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Feedback/Loadings/LinearProgress",
  component: LinearProgress,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "50px",
          width: "700px",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
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
    value: 45,
    valueBuffer: 55,
  },
  argTypes: {
    variant: {
      options: ["indeterminate", "determinate", "buffer"],
      control: { type: "select" },
      description: "`indeterminate` `determinate` `buffer`",
    },
    value: {
      type: "number",
      description:
        "if the `variant` option is `determinate` or `buffer` you can select a value from `0` to `100` that will fill in the amount of progress",
    },
    valueBuffer: {
      type: "number",
      description:
        "if the `variant` option is `buffer` you can select a valueBuffer from `0` to `100` that will fill in the amount of progress",
    },
    color: {
      type: "string",
      control: { type: "select" },
      options: [
        `primary`,
        `secondary`,
        `error`,
        `info`,
        `success`,
        `warning`,
        `inherit`,
      ],
      description:
        "`primary` `secondary` `error` `info` `success` `warning` `inherit`",
    },
  },
} satisfies Meta<typeof LinearProgress>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: "info",
    variant: "indeterminate",
    value: 45,
    valueBuffer: 55,
  },
}
