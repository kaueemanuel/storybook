import type { Meta } from "@storybook/react"

import { colors } from "../../../lib/ui/material/material"
import {
  AutocompleteWithIconField,
  AutocompleteWithIconFieldOptionProps,
} from "./AutocompleteWithIconField"

let exampleValue = {
  label: "Label 2",
  value: "2",
  iconName: "check",
  iconColor: colors.green[900],
} as AutocompleteWithIconFieldOptionProps

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/AutocompleteWithIconField",
  component: AutocompleteWithIconField,
  render: (args) => {
    return (
      <AutocompleteWithIconField
        key={JSON.stringify(args)}
        {...args}
        onChange={(value) => (exampleValue = value)}
      />
    )
  },
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
  },
  args: {
    fullWidth: true,
    disabled: false,
    placeholder: "Placeholder",
    color: "info",
    value: exampleValue,
    options: [
      {
        label: "Label 1",
        value: "1",
        iconName: "price_check",
        iconColor: colors.blue[900],
      },
      {
        label: "Label 2",
        value: "2",
        iconName: "check",
        iconColor: colors.green[900],
      },
      {
        label: "Label 3",
        value: "3",
        iconName: "close",
        iconColor: colors.red[900],
      },
    ],
  },
} satisfies Meta<typeof AutocompleteWithIconField>

export default meta

export const Playground = {
  args: {
    value: exampleValue,
    label: "Label",
    helperText: "Supporting text",
  },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
