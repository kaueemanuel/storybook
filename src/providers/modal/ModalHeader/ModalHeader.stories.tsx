import type { Meta, StoryObj } from "@storybook/react"

import { ModalHeader } from "./ModalHeader"

const meta = {
  title: "Components/Utils/Modal/ModalHeader",
  component: ModalHeader,
  render: (args) => <ModalHeader {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof ModalHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: "Title",
  },
}
