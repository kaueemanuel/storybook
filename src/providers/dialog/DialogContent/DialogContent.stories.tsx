import type { Meta, StoryObj } from "@storybook/react"

import { DialogContentText } from "../DialogContentText/DialogContentText"
import { Playground as DefaultContentText } from "../DialogContentText/DialogContentText.stories.tsx"
import { DialogContent } from "./DialogContent"

const meta = {
  title: "Components/Feedback/Dialog/DialogContent",
  component: DialogContent,
  render: (args) => <DialogContent {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DialogContent>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: <DialogContentText {...DefaultContentText.args} />,
  },
}
