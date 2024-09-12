import { ChangeEvent, useState } from "react"

import { Box } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { TextField } from "../../TextField/TextField"
import { DatagridFilter } from "./DatagridFilter"

const Component = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filters, setFilters] = useState<Array<any>>([])
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    name: "",
    description: "",
  })
  const [initialValues, setInitialValues] = useState(values)
  const handleOnChange = (
    key: string,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((values) => ({ ...values, [key]: e.target.value }))
  }

  const onClearFilter = () => {
    const cleanData = {
      name: "",
      description: "",
    }
    setValues(cleanData)
    setInitialValues(cleanData)
    setFilters([])
    setOpen(false)
  }

  const handleSetFilters = () => {
    const f = Object.keys(values).filter((key) => values[key] && values[key])
    setFilters(f)
    setOpen(false)
    setInitialValues(values)
  }

  const toggleOpen = () => {
    if (open) {
      setValues(initialValues)
    }
    setOpen(!open)
  }

  return (
    <DatagridFilter
      open={open}
      toggleOpen={toggleOpen}
      filtersCount={filters.length}
      resetFilters={onClearFilter}
      setFilters={handleSetFilters}
    >
      <Box mt={1}>
        <TextField
          fullWidth
          size="small"
          label="Nome"
          defaultValue={initialValues.name}
          value={values.name}
          onChange={(e) => handleOnChange("name", e)}
        />
        <TextField
          fullWidth
          size="small"
          label="Descrição"
          InputLabelProps={{
            style: {
              marginTop: "20px !important",
            },
          }}
          defaultValue={initialValues.description}
          value={values.description}
          onChange={(e) => handleOnChange("description", e)}
        />
      </Box>
    </DatagridFilter>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/DataDisplay/Datagrid/DatagridFilter",
  component: Component,
  decorators: [
    (Story) => (
      <div style={{ height: "300px", width: "100%", maxWidth: "700px" }}>
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
  args: {},
  argTypes: {
    filters: {
      control: "array",
      description: "`Array<any>`",
    },
    setFilters: {
      control: "object",
      description: "`() => void`",
    },
    open: {
      control: "boolean",
      description: "`boolean`",
    },
    toggleOpen: {
      control: "object",
      description: "`() => void`",
    },
    resetFilters: {
      control: "object",
      description: "`() => void`",
    },
    headerProps: {
      control: "object",
      description: "`BoxProps`",
    },
    footerProps: {
      control: "object",
      description: "`BoxProps`",
    },
    transformOrigin: {
      control: "object",
      description: "`PopoverOrigin`",
    },
    anchorOrigin: {
      control: "object",
      description: "`PopoverOrigin`",
    },
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {}
