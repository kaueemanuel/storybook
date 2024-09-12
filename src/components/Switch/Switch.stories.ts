import type { Meta, StoryObj } from "@storybook/react"

import { Switch } from "./Switch"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      type: "string",
      options: ["small", "medium"],
      control: "radio",
      description: "The size of the component.",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
  },
  args: {},
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    size: "medium",
  },
}
