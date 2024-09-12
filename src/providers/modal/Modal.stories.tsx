import { Typography } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../components/Button/Button"
import { useModal } from "./hooks/useModal"
import { ModalActions } from "./ModalActions/ModalActions"
import { Playground as DefaultActions } from "./ModalActions/ModalActions.stories"
import { ModalContent } from "./ModalContent/ModalContent"
import { Playground as DefaultContent } from "./ModalContent/ModalContent.stories"
import { ModalHeader } from "./ModalHeader/ModalHeader"
import { Playground as DefaultHeader } from "./ModalHeader/ModalHeader.stories"
import { ModalContentProps } from "./ModalProvider"

const Component = (args) => {
  const { openModal } = useModal()

  const handleOpenModal = () => {
    openModal({ ...args })
  }

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Utils/Modal",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<ModalContentProps>

export default meta
type Story = StoryObj<ModalContentProps>

export const Playground: Story = {
  args: {
    modalContent: (
      <Typography component="p" sx={{ p: 3 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
        accumsan cursus. Phasellus rhoncus nec neque eu aliquet. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </Typography>
    ),
  },
}

export const Default: Story = {
  args: {
    modalContent: (
      <>
        <ModalHeader {...DefaultHeader.args} />
        <ModalContent {...DefaultContent.args} />
        <ModalActions {...DefaultActions.args} />
      </>
    ),
  },
}
