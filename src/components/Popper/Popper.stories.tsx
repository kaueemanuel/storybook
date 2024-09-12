import { useRef, useState } from "react"

import { Fade, styled } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { IconButton } from "../IconButton/IconButton"
import { Popper } from "./Popper"
import { PopperContent } from "./PopperContent/PopperContent"
import { PopperHeader } from "./PopperHeader/PopperHeader"
import { Default as DefaultHeader } from "./PopperHeader/PopperHeader.stories"

const Component = (args) => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const PopperStyled = styled(Popper)({
    "& .MuiPopper-container": {
      "& .MuiPaper-root": {
        background: "linear-gradient(90deg, #FFF 30%, #edf3f9 100%)",
      },
    },
    '&[data-popper-placement*="bottom"]': {
      "& .MuiPopper-arrow::after": {
        background: "linear-gradient(45deg, transparent 40%, #edf3f9 60%)",
      },
    },
    '&[data-popper-placement*="top"]': {
      "& .MuiPopper-arrow::after": {
        background: "linear-gradient(45deg, #edf3f9 40%, transparent 60%)",
      },
    },
    '&[data-popper-placement*="right"]': {
      "& .MuiPopper-arrow::after": {
        background: "linear-gradient(-135deg, transparent 40%, #edf3f9 60%)",
      },
    },
    '&[data-popper-placement*="left"]': {
      "& .MuiPopper-arrow::after": {
        background: "linear-gradient(-135deg, #edf3f9 40%, transparent 60%)",
      },
    },
  })

  const handleOpenPopper = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <div>
      <div
        ref={anchorRef}
        style={{ width: "fit-content", height: "fit-content" }}
      >
        <IconButton
          icon="info"
          size="small"
          variant="text"
          disableRipple
          color="inherit"
          onClick={handleOpenPopper}
        />
      </div>
      <PopperStyled
        key={JSON.stringify(args)}
        {...args}
        open={open}
        anchorEl={anchorRef.current}
        onBlur={handleOpenPopper}
      />
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Utils/Popper",
  component: Component,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "250px",
          width: "400px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    arrow: true,
    transition: true,
    disablePortal: false,
    id: "scroll-playground",
    placement: "bottom-end",
    transitionProps: {
      unmountOnExit: true,
      timeoutTransition: 500,
      FadeComponent: Fade,
    },
    preventOverflow: {
      enabled: true,
      altAxis: true,
      altBoundary: true,
      tether: true,
      rootBoundary: "document",
    },
    flip: { enabled: true, altBoundary: true, rootBoundary: "document" },
  },
  argTypes: {},
} satisfies Meta<typeof Popper>

export default meta
type Story = StoryObj<typeof Popper>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {}

export const WithPopperHeaderTemplate: Story = {
  args: {
    children: (
      <>
        <PopperHeader {...DefaultHeader.args} />
        <PopperContent>Content</PopperContent>
      </>
    ),
  },
}
