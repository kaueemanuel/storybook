import { Meta, StoryObj } from "@storybook/react"

import { DatagridRefreshTimer } from "./DatagridRefreshTimer"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/DatagridRefreshTimer",
  component: DatagridRefreshTimer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    actionRefresh: () => {},
    defaultRefreshTime: 0,
    times: [0],
  },
} satisfies Meta<typeof DatagridRefreshTimer>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
