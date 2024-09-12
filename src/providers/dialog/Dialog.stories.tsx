import type { Meta, StoryObj } from "@storybook/react"

import { Default as DefaultAlert } from "../../components/AlertDialog/AlertDialog.stories.tsx"
import { AlertDialog } from "../../components/AlertDialog/AlertDialog.tsx"
import { Button } from "../../components/Button/Button.tsx"
import { Playground as DefaultActions } from "./DialogActions/DialogActions.stories.tsx"
import { DialogActions } from "./DialogActions/DialogActions.tsx"
import { Playground as DefaultContent } from "./DialogContent/DialogContent.stories.tsx"
import { DialogContent } from "./DialogContent/DialogContent.tsx"
import { ContentProps } from "./DialogProvider.tsx"
import { Playground as DefaultTitle } from "./DialogTitle/DialogTitle.stories.tsx"
import { DialogTitle } from "./DialogTitle/DialogTitle.tsx"
import { useDialog } from "./hooks/useDialog.ts"

const Component = (args) => {
  const { openDialog } = useDialog()

  const handleOpenDialog = () => {
    openDialog({ ...args })
  }

  return (
    <div>
      <Button onClick={handleOpenDialog}>Open Dialog</Button>
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Feedback/Dialog",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  args: {
    dialogProps: {
      maxWidth: "sm",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<ContentProps>

export default meta
type Story = StoryObj<ContentProps>

export const Playground: Story = {
  args: {
    dialogContent: <DialogContent {...DefaultContent.args} />,
  },
}

export const Default: Story = {
  args: {
    dialogContent: (
      <>
        <DialogTitle {...DefaultTitle.args} />
        <DialogContent {...DefaultContent.args} />
        <DialogActions {...DefaultActions.args} />
      </>
    ),
  },
}

export const Alert: Story = {
  args: {
    dialogContent: <AlertDialog {...DefaultAlert.args} />,
  },
}
