import type { Meta, StoryObj } from "@storybook/react"

import { MultiColorDeterminateLinearProgress } from "./MultiColorDeterminateLinearProgress"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/DataDisplay/Charts/MultiColorDeterminateLinearProgress",
  component: MultiColorDeterminateLinearProgress,
  decorators: [
    (Story) => (
      <div style={{ minHeight: "250px", width: "400px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {},
  argTypes: {},
} satisfies Meta<typeof MultiColorDeterminateLinearProgress>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    showLegend: true,
    data: [
      {
        value: "5",
        color: "#A5CCC2",
        name: "Lorem Ipsum",
      },
      {
        value: "20",
        color: "#f5ee22",
        name: "Lorem Ipsum 2",
      },
      {
        value: "0",
        color: "#f50e22",
        name: "Lorem Ipsum 2",
      },
    ],
  },
}
