import type { Meta, StoryObj } from "@storybook/react"

import { DialogContentText } from "./DialogContentText"

const meta = {
  title: "Components/Feedback/Dialog/DialogContentText",
  component: DialogContentText,
  render: (args) => <DialogContentText {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DialogContentText>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat accumsan cursus. Phasellus rhoncus nec neque eu aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
}
