import type { Meta, StoryObj } from "@storybook/react"

const EllevenDarkLogoSVG = "/elleven_dark.svg"
const EllevenLogoWhiteSVG = "/elleven_white.svg"

const meta = {
  title: "Logos/EllevenLogoSVG",
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
} satisfies Meta

export default meta
type Story = StoryObj

export const Dark: Story = {
  render: () => <img src={EllevenDarkLogoSVG} />,
}

export const White: Story = {
  render: () => (
    <img
      src={EllevenLogoWhiteSVG}
      style={{ backgroundColor: "#EEEEEE", padding: 10 }}
    />
  ),
}
