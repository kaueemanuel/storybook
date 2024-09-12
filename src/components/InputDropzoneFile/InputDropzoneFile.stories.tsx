import type { Meta, StoryObj } from "@storybook/react"

import { InputDropzoneFile } from "./InputDropzoneFile"

const meta = {
  title: "Components/Utils/DropZoneFile",
  component: InputDropzoneFile,
  render: (args) => <InputDropzoneFile key={JSON.stringify(args)} {...args} />,
  decorators: [
    (Story) => (
      <div style={{ height: "300px", width: "100%", maxWidth: "700px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputDropzoneFile>

export default meta
type Story = StoryObj<typeof InputDropzoneFile>

export const Default: Story = {
  args: {},
}
