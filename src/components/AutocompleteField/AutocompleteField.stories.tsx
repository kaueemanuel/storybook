import type { Meta, StoryObj } from "@storybook/react"

import { AutocompleteField } from "./AutocompleteField"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/AutocompleteField",
  component: AutocompleteField,
  render: (args) => <AutocompleteField key={JSON.stringify(args)} {...args} />,
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fullWidth: {
      type: "boolean",
    },
    freeSolo: {
      type: "boolean",
    },
    multiple: {
      type: "boolean",
    },
  },
  args: {
    defaultValue: "",
    fullWidth: true,
    disabled: false,
    placeholder: "Placeholder",
    color: "info",
    options: ["Label 1", "Label 2", "Label 3"],
  },
} satisfies Meta<typeof AutocompleteField>

export default meta
type Story = StoryObj<typeof meta>

export const Playground = {
  args: {
    defaultValue: null,
    label: "Label",
    helperText: "Supporting text",
  },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    defaultValue: "Label 3",
  },
}

export const Multiple: Story = {
  args: {
    multiple: true,
    defaultValue: ["Label 1", "Label 2"],
  },
}
