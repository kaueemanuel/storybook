import type { Meta, StoryObj } from "@storybook/react"

import { SefazCountry } from "./SefazCountry"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/DataDisplay/SefazCountry",
  component: SefazCountry,
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
} satisfies Meta<typeof SefazCountry>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    data: {
      normal: ["AL", "SP", "MS", "PA", "MA", "PE", "RN", "RO", "SE"],
      slow: ["AC", "AP", "DF", "PB", "ES", "MG", "PI", "RS", "RR"],
      stopped: ["AM", "GO", "BA", "CE", "PR", "MT", "RJ", "SC", "TO"],
    },
  },
}
