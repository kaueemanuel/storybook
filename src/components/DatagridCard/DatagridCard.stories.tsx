import { Box } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { Datagrid } from "../Datagrid/Datagrid"
import { DatagridColDef } from "../Datagrid/Types/DatagridColDef"
import { DatagridInputSearch } from "../DatagridInputSearch/DatagridInputSearch"
import { DatagridRefreshTimer } from "../DatagridRefreshTimer/DatagridRefreshTimer"
import { DatagridCard } from "./DatagridCard"
import { DatagridCardContent } from "./DatagridCardContent/DatagridCardContent"
import { DatagridCardHeader } from "./DatagridCardHeader/DatagridCardHeader"
import { DatagridCardHeaderTitle } from "./DatagridCardHeader/DatagridCardHeaderTitle/DatagridCardHeaderTitle"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const meta = {
  title: "Components/Surfaces/DatagridCard",
  component: DatagridCard,
  render: (args) => <DatagridCard key={JSON.stringify(args)} {...args} />,
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
} satisfies Meta<typeof DatagridCard>

export default meta
type Story = StoryObj<typeof DatagridCard>

export const Default: Story = {
  args: {
    sx: { minWidth: 500 },
    children: (
      <>
        <DatagridCardHeader>
          <DatagridCardHeaderTitle title="Título" />
          <Box display={"flex"} alignItems={"center"} gap={"32px"}>
            <DatagridInputSearch />
            <DatagridRefreshTimer
              actionRefresh={() => {}}
              defaultRefreshTime={0}
            />
          </Box>
        </DatagridCardHeader>
        <DatagridCardContent>
          <Datagrid
            columns={columns}
            rows={rows}
            mode="client"
            checkboxSelection={false}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: {
                  page: 0,
                  pageSize: 5,
                },
              },
            }}
          />
        </DatagridCardContent>
      </>
    ),
  },
}
