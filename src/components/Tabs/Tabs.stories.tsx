import type { Meta, StoryObj } from "@storybook/react"

import { Tabs } from "./Tabs"

const meta = {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  render: (args) => <Tabs key={JSON.stringify(args)} {...args} />,
  decorators: [
    (Story) => (
      <div style={{ height: "300px", width: "100%", maxWidth: "700px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    tabs: [
      {
        tabContent: "tab1",
        panelContent: "Tab 1",
      },
      {
        tabContent: "tab2",
        panelContent: "Tab 2",
      },
      {
        tabContent: "tab3",
        panelContent: "Tab 3",
      },
    ],
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {},
}

export const Indicatorcolorbytabs: Story = {
  args: {
    tabs: [
      {
        tabContent: "tab1",
        tabTextActiveColor: "#000000",
        tabIndicatorColor: "#ff3255",
        panelContent: "Tab 1",
      },
      {
        tabContent: "tab2",
        tabTextActiveColor: "#EF22C0",
        tabIndicatorColor: "#3f2244",
        panelContent: "Tab 2",
      },
      {
        tabContent: "tab3",
        tabTextActiveColor: "#0FB5EC",
        tabIndicatorColor: "#af4500",
        panelContent: "Tab 3",
      },
    ],
  },
}
