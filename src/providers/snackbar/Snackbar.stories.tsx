import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../components/Button/Button"
import { openSnackbar, OpenSnackbarOptionsProps } from "./SnackbarFunctions"
import { SnackbarProvider } from "./SnackbarProvider"

interface TemplateArgs extends OpenSnackbarOptionsProps {
  message: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: OpenSnackbarOptionsProps["variant"] | any
}

const Component = (args) => {
  const handleOpenSnackbar = () => {
    openSnackbar(args.message, { ...args })
  }

  return (
    <div>
      <SnackbarProvider />
      <Button onClick={handleOpenSnackbar}>Open Snackbar</Button>
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Feedback/Snackbar",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ["default", "error", "info", "success", "warning"],
    },
  },
} satisfies Meta<TemplateArgs>

export default meta
type Story = StoryObj<TemplateArgs>

export const Playground: Story = {
  args: {
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    closeButton: true,
    copyButton: true,
    persist: true,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    variant: {
      options: ["default", "error", "info", "success", "warning"],
    },
  },
}
