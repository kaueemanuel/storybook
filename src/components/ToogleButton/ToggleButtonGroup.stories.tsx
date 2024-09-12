import type { Meta, StoryObj } from "@storybook/react"

import { Icon } from "../Icons/Icon"
import { ToggleButton } from "./ToggleButton/ToggleButton"
import { ToggleButtonGroup } from "./ToggleButtonGroup"

const meta = {
  title: "Components/Inputs/Buttons/ToogleButtonGroup",
  component: ToggleButtonGroup,
  render: (args) => <ToggleButtonGroup key={JSON.stringify(args)} {...args} />,
  decorators: [
    (Story) => (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
} satisfies Meta<typeof ToggleButtonGroup>

export default meta
type Story = StoryObj<typeof ToggleButtonGroup>

export const Playground: Story = {
  args: {
    value: "list",
    orientation: "horizontal",
    children: (
      <>
        <ToggleButton value="list" aria-label="list">
          <Icon name="view_list" fill />
        </ToggleButton>
        <ToggleButton value="module" aria-label="module">
          <Icon name="view_module" fill />
        </ToggleButton>
        <ToggleButton value="quilt" aria-label="quilt">
          <Icon name="view_quilt" fill />
        </ToggleButton>
      </>
    ),
  },
}
