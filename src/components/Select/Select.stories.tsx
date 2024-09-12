import { MenuItem } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { Select } from "./Select"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    variant: "outlined",
    defaultValue: 0,
    children: (
      <>
        <MenuItem value={0}>Todos</MenuItem>
        <MenuItem value={1}>Primeiro</MenuItem>
        <MenuItem value={2}>Segundo</MenuItem>
        <MenuItem value={3}>Terceiro</MenuItem>
      </>
    ),
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    error: false,
    label: "Label",
    helperText: "Supporting text",
    placeholder: "Placeholder",
    defaultValue: 0,
    children: (
      <>
        <MenuItem value={0}>Todos</MenuItem>
        <MenuItem value={1}>Primeiro</MenuItem>
        <MenuItem value={2}>Segundo</MenuItem>
        <MenuItem value={3}>Terceiro</MenuItem>
      </>
    ),
  },
}
