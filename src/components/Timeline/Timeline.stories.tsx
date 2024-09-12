import { Avatar } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { Icon } from "../Icons/Icon"
import { Timeline } from "./Timeline"

const meta = {
  title: "Components/Surfaces/Timeline",
  component: Timeline,
  render: (args) => <Timeline key={JSON.stringify(args)} {...args} />,
  decorators: [
    (Story) => (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "100vh",
          width: "300px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof Timeline>

export const Playground: Story = {
  args: {
    layout: "horizontal",
    value: [
      {
        status: "Ordered",
      },
      {
        status: "Processing",
      },
      {
        status: "Shipped",
      },
    ],
    content: (item) => item.status,
  },
}

export const EmptyData: Story = {
  args: {
    value: [],
  },
}

export const WithIcon: Story = {
  args: {
    value: [
      {
        status: "Ordered",
        icon: "home",
        color: "success",
      },
      {
        status: "Processing",
        icon: "star",
        color: "info",
      },
      {
        status: "Shipped",
        icon: "earbuds",
        color: "warning",
      },
    ],
    content: (item) => item.status,
    marker: (item) => (
      <Icon name={item.icon} fontSize="small" color={item.color} />
    ),
  },
}

export const WithAvatar: Story = {
  args: {
    value: [
      {
        status: "Ordered",
        icon: "https://i.pravatar.cc/31",
      },
      {
        status: "Processing",
        icon: "https://i.pravatar.cc/32",
      },
      {
        status: "Shipped",
        icon: "https://i.pravatar.cc/30",
      },
    ],
    content: (item) => item.status,
    marker: (item) => (
      <Avatar
        sx={{ width: 24, height: 24, bgcolor: "#E9EFF2" }}
        src={item.icon}
      />
    ),
  },
}
