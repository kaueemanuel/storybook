import type { Meta, StoryObj } from "@storybook/react"

import { PriorityBadge } from "./PriorityBadge"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Utils/PriorityBadge",
  component: PriorityBadge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {},
  argTypes: {},
} satisfies Meta<typeof PriorityBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    priority: {
      id: 0,
      description: "Normal",
    },
    compacted: false,
  },
}

export const Media: Story = {
  args: {
    priority: {
      id: 1,
      description: "Média",
    },
    compacted: false,
  },
}

export const Alta: Story = {
  args: {
    priority: {
      id: 2,
      description: "Alta",
    },
    compacted: false,
  },
}

export const Urgente: Story = {
  args: {
    priority: {
      id: 3,
      description: "Urgente",
    },
    compacted: false,
  },
}
