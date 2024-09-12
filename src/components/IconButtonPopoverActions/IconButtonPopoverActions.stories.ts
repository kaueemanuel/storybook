import type { Meta, StoryObj } from "@storybook/react"

import { IconButtonPopoverActions } from "./IconButtonPopoverActions"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/Buttons/IconButtonPopoverActions",
  component: IconButtonPopoverActions,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    icon: "home",
    tooltip: "",
  },
  argTypes: {
    icon: {
      description:
        "In the icon you can insert an SVGIcon or the name of the Material icon found here: https://mui.com/material-ui/material-icons/",
    },
  },
} satisfies Meta<typeof IconButtonPopoverActions>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    icon: "more_horiz",
    actions: [
      {
        icon: "send",
        iconProps: {
          fill: true,
        },
        label: "Send",
        onClick: () => {},
      },
      {
        icon: "assignment_returned",
        label: "Download",
        onClick: () => {},
      },
    ],
  },
}
