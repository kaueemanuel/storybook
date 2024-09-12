import type { Meta, StoryObj } from "@storybook/react"

import { RadarBarChart } from "./RadarBarChart"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/DataDisplay/Charts/RadarBarChart",
  component: RadarBarChart,
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
} satisfies Meta<typeof RadarBarChart>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    data: [
      {
        value: 2,
        color: "#A5CCC2",
        name: "Lorem Ipsum",
        time: "1h 50min",
      },
      {
        value: 20,
        color: "#f5ee22",
        name: "Lorem Ipsum 2",
        time: "12h 30min",
      },
    ],
  },
}
