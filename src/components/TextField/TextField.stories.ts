import type { Meta, StoryObj } from "@storybook/react"

import { TextField } from "./TextField"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/TextField",
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      type: "string",
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    helperText: {
      type: "string",
    },
    error: {
      type: "boolean",
    },
  },
  args: {
    variant: "outlined",
    disabled: false,
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    variant: "outlined",
    color: "primary",
    error: false,
    label: "Label",
    helperText: "Supporting text",
    placeholder: "Placeholder",
  },
}

export const TextArea: Story = {
  args: {
    rows: 3,
    multiline: true,
    variant: "outlined",
  },
}
