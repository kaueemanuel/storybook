import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../components/Button/Button"
import { theme } from "../../themes"
import { AlertDialog } from "./AlertDialog"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Feedback/Dialog/Examples/AlertDialog",
  component: AlertDialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    type: "delete",
    title: "Lorem ipsum?",
    icon: "delete_outlined_pgv",
    iconColor: theme.palette.accent.crm,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat accumsan cursus. Phasellus rhoncus nec neque eu aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    contentProps: {
      dividerTop: true,
    },
    cancelBtn: (
      <Button variant="outlined" color="error">
        feugiat
      </Button>
    ),
    confirmBtn: <Button variant="contained">Phasellus rhoncus nec</Button>,
  },
}
