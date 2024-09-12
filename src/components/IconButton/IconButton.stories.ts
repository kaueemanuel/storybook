import type { Meta, StoryObj } from "@storybook/react"

import { IconButton } from "./IconButton"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/Buttons/IconButton",
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    icon: "home",
    tooltip: "Tooltip",
  },
  argTypes: {
    icon: {
      description:
        "In the icon you can insert an SVGIcon or the name of the Material icon found here: https://mui.com/material-ui/material-icons/",
    },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {}

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
}

export const Contained: Story = {
  args: {
    variant: "contained",
  },
}

export const Squared: Story = {
  args: {
    squared: true,
    variant: "contained",
  },
}
