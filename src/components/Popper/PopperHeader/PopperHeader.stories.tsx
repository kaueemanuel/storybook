import type { Meta, StoryObj } from "@storybook/react"

import { PopperHeader } from "./PopperHeader"

const meta = {
  title: "Components/Utils/Popper/PopperHeader",
  component: PopperHeader,
  render: (args) => <PopperHeader {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof PopperHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Popper Title",
    pageTitle: "Page Title",
    description: "Popper description",
  },
}
