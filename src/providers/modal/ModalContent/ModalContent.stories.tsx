import type { Meta, StoryObj } from "@storybook/react"

import { ModalContent } from "./ModalContent"

const meta = {
  title: "Components/Utils/Modal/ModalContent",
  component: ModalContent,
  render: (args) => <ModalContent {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof ModalContent>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: "Content",
  },
}
