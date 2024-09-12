import type { Meta, StoryObj } from "@storybook/react"

import { ResizablePanel } from "./ResizablePanel"
import { ResizablePanelContent } from "./ResizablePanelContent/ResizablePanelContent"
import { ResizablePanelDragHandle } from "./ResizablePanelDragHandle/ResizablePanelDragHandle"

const meta = {
  title: "Components/Utils/ResizablePanel",
  component: ResizablePanel,
  render: (args) => <ResizablePanel key={JSON.stringify(args)} {...args} />,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "90vh",
          minWidth: "700px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    direction: "horizontal",
  },
  argTypes: {},
} satisfies Meta<typeof ResizablePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    autoSaveId: "example",
    children: (
      <>
        <ResizablePanelContent
          minSize={10}
          style={{ backgroundColor: "grey" }}
          id="left"
          order={1}
        >
          Left
        </ResizablePanelContent>
        <ResizablePanelDragHandle />
        <ResizablePanelContent
          minSize={10}
          style={{ backgroundColor: "grey" }}
          id="left"
          order={1}
        >
          Center
        </ResizablePanelContent>
        <ResizablePanelDragHandle />
        <ResizablePanelContent
          minSize={10}
          style={{ backgroundColor: "grey" }}
          id="right"
          order={3}
        >
          Right
        </ResizablePanelContent>
      </>
    ),
  },
}
