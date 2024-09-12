import { Stack } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../../components/Button/Button"
import { ModalActions } from "./ModalActions"

const meta = {
  title: "Components/Utils/Modal/ModalActions",
  component: ModalActions,
  render: (args) => <ModalActions {...args} />,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof ModalActions>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: (
      <Stack useFlexGap spacing={3} direction="row">
        <Button variant="outlined" color="error">
          feugiat
        </Button>
        <Button variant="contained">Lorem</Button>
      </Stack>
    ),
  },
}
