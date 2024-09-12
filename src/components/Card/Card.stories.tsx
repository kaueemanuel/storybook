import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../components/Button/Button"
import { Card } from "./Card"
import { CardActions } from "./CardActions/CardActions"
import { CardContent } from "./CardContent/CardContent"
import { CardHeader } from "./CardHeader/CardHeader"

const meta = {
  title: "Components/Surfaces/Card",
  component: Card,
  render: (args) => <Card key={JSON.stringify(args)} {...args} />,
  decorators: [
    (Story) => (
      <div style={{ height: "300px", width: "400px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Playground: Story = {
  args: {
    sx: { minWidth: 330 },
    children: "Test",
  },
}

export const Default: Story = {
  args: {
    sx: { minWidth: 330 },
    children: (
      <>
        <CardHeader title="Example" />
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
          accumsan cursus. Phasellus rhoncus nec neque eu aliquet. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </CardContent>
        <CardActions>
          <Button>Button</Button>
        </CardActions>
      </>
    ),
  },
}
