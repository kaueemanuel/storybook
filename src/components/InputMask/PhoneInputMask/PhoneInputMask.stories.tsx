import type { Meta, StoryObj } from "@storybook/react"

import { PhoneInputMask as PhoneInputMaskComponent } from "./PhoneInputMask"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/InputMask/PhoneInputMask",
  component: PhoneInputMaskComponent,
  render: (args) => (
    <PhoneInputMaskComponent key={JSON.stringify(args)} {...args} />
  ),
  decorators: [
    (Story) => (
      <div style={{ height: "300px", width: "100%", maxWidth: "700px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
} satisfies Meta<typeof PhoneInputMaskComponent>

export default meta
type Story = StoryObj<typeof PhoneInputMaskComponent>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PhoneInputMask: Story = {
  args: {
    alwaysShowMask: true,
    textFieldProps: {
      variant: "outlined",
    },
  },
}
