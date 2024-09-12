import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../components/Button/Button"
import { IconButton } from "../../components/IconButton/IconButton"
import { theme } from "../../themes"
import { ListingCard } from "./ListingCard"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Surfaces/Card/Examples/ListingCard",
  component: ListingCard,
  decorators: [
    (Story) => (
      <div style={{ minHeight: "250px", width: "400px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ListingCard>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    chips: {
      chipText: "After-Sale",
      chipBgColor: "green",
      chipProps: {
        style: {
          color: "white",
        },
      },
    },
    icon: "home",
    title: "Home",
    iconBgColor: theme.palette.accent.crm,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat accumsan cursus. Phasellus rhoncus nec neque eu aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    viewBtn: (
      <Button color="secondary" variant="contained">
        View
      </Button>
    ),
    addBtn: (
      <IconButton icon={"add"} variant="contained" color="primary" squared />
    ),
  },
}

export const Default: Story = {
  args: {
    chips: {
      chipText: "Pós-venda",
      chipBgColor: "green",
      chipProps: {
        style: {
          color: "white",
        },
      },
    },
    icon: "home",
    title: "Agenda",
    iconBgColor: theme.palette.accent.crm,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat accumsan cursus. Phasellus rhoncus nec neque eu aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    viewBtn: (
      <Button color="secondary" variant="contained">
        View
      </Button>
    ),
    addBtn: (
      <IconButton icon={"add"} variant="contained" color="primary" squared />
    ),
  },
}

export const MultipleChips: Story = {
  args: {
    chips: [
      {
        chipText: "Pós-venda",
        chipBgColor: "green",
        chipProps: {
          style: {
            color: "white",
          },
        },
      },
      {
        chipText: "Pré-venda",
        chipBgColor: "blue",
        chipProps: {
          style: {
            color: "white",
          },
        },
      },
    ],
    icon: "home",
    title: "Agenda",
    iconBgColor: theme.palette.accent.crm,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat accumsan cursus. Phasellus rhoncus nec neque eu aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    viewBtn: (
      <Button color="secondary" variant="contained">
        View
      </Button>
    ),
    addBtn: (
      <IconButton icon={"add"} variant="contained" color="primary" squared />
    ),
  },
}
