import type { Meta, StoryObj } from "@storybook/react"

import { InputMask } from "./InputMask"
import {
  CepMaskFormat,
  DateMaskFormat,
  DateTimeMaskFormat,
  HourMaskFormat,
} from "./InputMask.formats"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/InputMask",
  component: InputMask,
  render: (args) => <InputMask key={JSON.stringify(args)} {...args} />,
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
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputMask>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    mask: "999999999999",
    alwaysShowMask: true,
    textFieldProps: {
      variant: "outlined",
      error: false,
      label: "Label",
      helperText: "Supporting text",
    },
  },
  argTypes: {
    mask: {
      table: {
        type: { summary: "Custom" },
      },
    },
  },
}

export const Cep: Story = {
  args: {
    mask: CepMaskFormat,
    alwaysShowMask: true,
    textFieldProps: {
      variant: "outlined",
    },
  },
  argTypes: {
    mask: {
      table: {
        type: { summary: "CepMaskFormat" },
      },
    },
  },
}

export const Date: Story = {
  args: {
    mask: DateMaskFormat,
    alwaysShowMask: true,
    textFieldProps: {
      variant: "outlined",
    },
  },
  argTypes: {
    mask: {
      table: {
        type: { summary: "DateMaskFormat" },
      },
    },
  },
}

export const DateTime: Story = {
  args: {
    mask: DateTimeMaskFormat,
    alwaysShowMask: true,
    textFieldProps: {
      variant: "outlined",
    },
  },
  argTypes: {
    mask: {
      table: {
        type: { summary: "DateTimeMaskFormat" },
      },
    },
  },
}

export const Hour: Story = {
  args: {
    mask: HourMaskFormat,
    alwaysShowMask: true,
    textFieldProps: {
      variant: "outlined",
    },
  },
  argTypes: {
    mask: {
      table: {
        type: { summary: "HourMaskFormat" },
      },
    },
  },
}
