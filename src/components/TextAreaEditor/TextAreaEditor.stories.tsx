import type { Meta, StoryObj } from "@storybook/react"

import { TextAreaEditor } from "./TextAreaEditor.tsx"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Utils/TextAreaEditor",
  component: TextAreaEditor,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "250px",
          width: "500px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
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
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    fullWidth: true,
  },
} satisfies Meta<typeof TextAreaEditor>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    value: "Initial value setted... <b>Lorem Ipsum[...]</b>",
  },
}

export const TextAreaWithError: Story = {
  args: {
    error: true,
    label: "Label Error Field",
    helperText: "This field contains an error.",
    value: "Error field... <b>Lorem Ipsum[...]</b>",
  },
}

export const TextAreaDisabled: Story = {
  args: {
    disabled: true,
    label: "Label Field Disabled",
    value: "Field disabled... <b>Lorem Ipsum[...]</b>",
  },
}

export const TextAreaCustomToolbar: Story = {
  args: {
    label: "Label Field Custom Toolbar",
    value: "Custom toolbar above... <b>Lorem Ipsum[...]</b>",
    toolbarOptions: {
      inline: ["bold", "underline"],
      textAlign: ["left", "center"],
      colorPicker: ["colorPicker"],
      link: ["link", "unlink"],
    },
  },
}
