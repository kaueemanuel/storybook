import type { Meta, StoryObj } from "@storybook/react"

import { DrawerHeaderTemplate } from "./DrawerHeaderTemplate"

const meta = {
  title: "Components/Navigation/Drawer/DrawerHeaderTemplate",
  component: DrawerHeaderTemplate,
  render: (args) => <DrawerHeaderTemplate {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DrawerHeaderTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    title: "Drawer Title",
    pageTitle: "Page Title",
    description: "Drawer description",
  },
}

export const Default: Story = {
  args: {
    title: "Drawer Title",
    pageTitle: "Page Title",
    description: "Drawer description",
  },
}
