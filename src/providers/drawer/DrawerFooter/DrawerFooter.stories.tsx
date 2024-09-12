import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../../components/Button/Button"
import { useDrawer } from "../hooks/useDrawer"
import { DrawerFooter } from "./DrawerFooter"

const meta = {
  title: "Components/Navigation/Drawer/DrawerFooter",
  component: DrawerFooter,
  render: (args) => <DrawerFooter {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DrawerFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: "Content Footer",
  },
}

const Component = () => {
  const { closeDrawer } = useDrawer()

  return (
    <Button
      title="Title"
      variant="outlined"
      color="secondary"
      onClick={closeDrawer}
    >
      Close
    </Button>
  )
}

export const Default: Story = {
  args: {
    children: <Component />,
  },
}
