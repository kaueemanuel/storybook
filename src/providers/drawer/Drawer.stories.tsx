import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../components/Button/Button"
import { DrawerContent } from "./DrawerContent/DrawerContent"
import { Playground as DefaultContent } from "./DrawerContent/DrawerContent.stories"
import { Default as DefaultFooter } from "./DrawerFooter/DrawerFooter.stories.tsx"
import { DrawerFooter } from "./DrawerFooter/DrawerFooter.tsx"
import { DrawerHeader } from "./DrawerHeader/DrawerHeader"
import { Default as DefaultHeader } from "./DrawerHeader/DrawerHeader.stories"
import { DrawerHeaderTemplate } from "./DrawerHeaderTemplate/DrawerHeaderTemplate.tsx"
import { ContentProps } from "./DrawerProvider"
import { useDrawer } from "./hooks/useDrawer"

const Component = (args) => {
  const { openDrawer } = useDrawer()

  const handleOpenDrawer = () => {
    openDrawer({ ...args })
  }

  return (
    <div>
      <Button onClick={handleOpenDrawer}>Open Drawer</Button>
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Navigation/Drawer",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  args: {
    controlProps: {
      showButtonAnchor: true,
      showButtonFullscreen: true,
    },
    drawerProps: {
      keepMounted: true,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<ContentProps>

export default meta
type Story = StoryObj<ContentProps>

export const Playground: Story = {
  args: {},
}

export const Default: Story = {
  args: {
    drawerContent: (
      <>
        <DrawerHeader {...DefaultHeader.args} />
        <DrawerContent {...DefaultContent.args} />
        <DrawerFooter {...DefaultFooter.args} />
      </>
    ),
  },
}

export const WithDrawerHeaderTemplate: Story = {
  args: {
    drawerContent: (
      <>
        <DrawerHeaderTemplate
          title="Drawer Title"
          pageTitle="Page Title"
          description="Drawer description"
        />
        <DrawerContent {...DefaultContent.args} />
        <DrawerFooter {...DefaultFooter.args} />
      </>
    ),
  },
}
