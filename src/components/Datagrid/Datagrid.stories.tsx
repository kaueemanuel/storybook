/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material"
import { GridValueGetterParams } from "@mui/x-data-grid"
import type { Meta, StoryObj } from "@storybook/react"

import { InputSearch } from "../../components/InputSearch/InputSearch"
import { Datagrid } from "./Datagrid"
import { DatagridToolbar } from "./DatagridToolbar/DatagridToolbar"
import { DatagridColDef } from "./Types/DatagridColDef"

const columns: DatagridColDef<any>[] = [
  {
    field: "code",
    headerName: "ID",
    width: 70,
    sortable: true,
  },
  {
    field: "firstName",
    headerName: "Primeiro nome",
    width: 130,
    disableColumnMenu: true,
    sortable: true,
    searchable: true,
  },
  { field: "lastName", headerName: "Último nome", width: 130 },
  {
    field: "age",
    headerName: "Idade",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Nome completo",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
]

const rows = [
  { code: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { code: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { code: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { code: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { code: 5, lastName: "Targaryen", firstName: "Daenerys", age: 45 },
  { code: 6, lastName: "Melisandre", firstName: "Meli", age: 150 },
  { code: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { code: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { code: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
]

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/DataDisplay/Datagrid",
  component: Datagrid,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", minWidth: "700px" }}>
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
  argTypes: {
    toolbar: {
      description: "JSX elements are placed here",
    },
  },
  args: {
    mode: "client",
    checkboxSelection: false,
    pageSizeOptions: [5, 10, 25],
    initialState: {
      pagination: {
        paginationModel: {
          page: 0,
          pageSize: 5,
        },
      },
    },
  },
} satisfies Meta<typeof Datagrid>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    columns,
    rows,
    mode: "client",
  },
}

export const Toolbar: Story = {
  args: {
    columns,
    rows,
    mode: "client",
    toolbar: (
      <DatagridToolbar justifyContent={"end"}>
        <InputSearch />
      </DatagridToolbar>
    ),
  },
}

export const Actions: Story = {
  args: {
    columns,
    rows,
    mode: "client",
    rowActions: () => [
      {
        tooltip: "Editar",
        icon: "edit",
        onClick: () => {},
      },
    ],
    configActions: {
      width: 80,
    },
  },
}

export const Checkbox: Story = {
  args: {
    columns,
    rows,
    mode: "client",
    checkboxSelection: true,
  },
}

export const ExpandableRows: Story = {
  args: {
    columns,
    rows,
    mode: "client",
    expandableRow: true,
    getDetailPanelContent: (row) => {
      return <Box sx={{ p: 2 }}>{`Details of #${row.id}`}</Box>
    },
  },
}
