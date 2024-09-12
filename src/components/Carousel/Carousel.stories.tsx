import type { Meta, StoryObj } from "@storybook/react"

import { Carousel } from "./Carousel"

const meta = {
  title: "Components/Utils/Carousel",
  component: Carousel,
  render: (args) => <Carousel key={JSON.stringify(args)} {...args} />,
  decorators: [
    (Story) => (
      <div style={{ height: "300px", width: "100%", maxWidth: "700px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    effect: {
      options: ["default", "fade", "cube", "coverflow"],
      description: "",
    },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    slides: ["string 1", "string 2", "string 3", "string 4"],
    pagination: { clickable: true },
    effect: "default",
  },
}
