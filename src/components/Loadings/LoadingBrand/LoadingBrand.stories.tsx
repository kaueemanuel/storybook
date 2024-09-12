import type { Meta, StoryObj } from "@storybook/react"

import { LoadingBrand } from "./LoadingBrand"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Feedback/Loadings/LoadingBrand",
  component: LoadingBrand,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "300px",
          width: "700px",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundOpacity: {
      description: "You can enter a value between `0` and `1` Ex: `0.6`",
    },
  },
} satisfies Meta<typeof LoadingBrand>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {}
