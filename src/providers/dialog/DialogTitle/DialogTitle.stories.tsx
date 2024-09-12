import type { Meta, StoryObj } from "@storybook/react"

import { DialogTitle } from "./DialogTitle"

const meta = {
  title: "Components/Feedback/Dialog/DialogTitle",
  component: DialogTitle,
  render: (args) => <DialogTitle {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DialogTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: "Use Google's location service?",
  },
}
