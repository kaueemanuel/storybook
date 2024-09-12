import type { Meta, StoryObj } from "@storybook/react"

const EmptyDataLogoSVG = "/filter_not_found.svg"

const meta = {
  title: "Logos/EmptyDataLogoSVG",
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <img src={EmptyDataLogoSVG} />,
}
