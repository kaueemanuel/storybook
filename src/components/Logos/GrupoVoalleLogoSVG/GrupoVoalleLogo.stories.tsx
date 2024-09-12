import type { Meta, StoryObj } from "@storybook/react"

const GrupoVoalleLogoSVG = "/grupo_voalle_logo.svg"

const meta = {
  title: "Logos/GrupoVoalleLogoSVG",
  render: () => <img src={GrupoVoalleLogoSVG} />,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
} satisfies Meta

export default meta
type Story = StoryObj

export const Example: Story = {}
