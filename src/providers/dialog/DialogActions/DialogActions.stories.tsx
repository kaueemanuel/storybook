import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../../components/Button/Button"
import { DialogActions } from "./DialogActions"

const meta = {
  title: "Components/Feedback/Dialog/DialogActions",
  component: DialogActions,
  render: (args) => <DialogActions {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DialogActions>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: (
      <>
        <Button onClick={() => {}}>Disagree</Button>
        <Button onClick={() => {}} autoFocus>
          Agree
        </Button>
      </>
    ),
  },
}
