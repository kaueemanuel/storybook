import type { Meta, StoryObj } from "@storybook/react"

import { PopperContent } from "./PopperContent"

const meta = {
  title: "Components/Utils/Popper/PopperContent",
  component: PopperContent,
  render: (args) => <PopperContent {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof PopperContent>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: "Content",
  },
}
