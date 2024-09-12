import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react"

import { DateRangePicker } from "./DateRangePicker"

const Component = (args) => {
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DateRangePicker
        endDate={endDate}
        setEndDate={setEndDate}
        startDate={startDate}
        setStartDate={setStartDate}
        {...args}
      />
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/Pickers/DateRangePicker",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    startDate: {
      type: "string",
      control: "none",
      description: "string in the format `YYYY-MM-DD`",
    },
    endDate: {
      type: "string",
      control: "none",
      description: "string in the format `YYYY-MM-DD`",
    },
    setStartDate: {
      type: "function",
      control: "function",
      description:
        "function that receives a string in the format `YYYY-MM-DD` and sets the value of startDate",
    },
    setEndDate: {
      type: "function",
      control: "function",
      description:
        "function that receives a string in the format `YYYY-MM-DD` and sets the value of endDate",
    },
    fullWidth: { type: "boolean" },
    required: { type: "boolean" },
    label: { type: "string" },
    helperText: { type: "string" },
    error: { type: "boolean" },
    variant: {
      type: "string",
      defaultValue: "outlined",
      options: ["outlined", "filled", "standard"],
      control: "radio",
    },
    size: {
      type: "string",
      defaultValue: "small",
      options: ["small", "medium"],
      control: "radio",
    },
    color: {
      type: "string",
      defaultValue: "small",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
      control: "select",
    },
    "data-testid": { type: "string" },
    placement: {
      type: "string",
      defaultValue: "small",
      options: [
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "right-start",
        "right-end",
        "left-start",
        "left-end",
        "top",
        "bottom",
        "right",
        "left",
        "auto",
      ],
      control: "select",
    },
  },
  args: {},
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    endDate: "",
    startDate: "",
    label: "",
    variant: "outlined",
    size: "small",
  },
}
