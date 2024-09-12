import type { Meta, StoryObj } from "@storybook/react"

import { DrawerContent } from "./DrawerContent"

const meta = {
  title: "Components/Navigation/Drawer/DrawerContent",
  component: DrawerContent,
  render: (args) => <DrawerContent {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DrawerContent>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: "Content",
  },
}
