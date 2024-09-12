import type { Meta, StoryObj } from "@storybook/react"

import { DoughnutPieChart } from "./DoughnutPieChart"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/DataDisplay/Charts/DoughnutPieChart",
  component: DoughnutPieChart,
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
} satisfies Meta<typeof DoughnutPieChart>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    data: [
      { value: 23, color: "#67D18A", name: "Search Engine" },
      { value: 15, color: "#FA7C70", name: "Direct" },
      { value: "07", color: "#F9A466", name: "Email" },
      { value: "07", color: "#66BDF9", name: "Union Ads" },
      { value: "07", color: "#9CB1C8", name: "Video Ads" },
      { value: "02", color: "#F6BD67", name: "Video Ads 2" },
    ],
  },
}
