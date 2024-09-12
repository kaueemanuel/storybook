import { Typography } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { DrawerHeader } from "./DrawerHeader"

const meta = {
  title: "Components/Navigation/Drawer/DrawerHeader",
  component: DrawerHeader,
  render: (args) => <DrawerHeader {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DrawerHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: "Content Header",
  },
}

export const Default: Story = {
  args: {
    children: (
      <>
        <Typography>Drawer Header</Typography>
      </>
    ),
  },
}
