import { DatagridPaginatedResponseType } from "../../../components/Datagrid/Types/DatagridPagination"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DatagridRequestReturnType<T = any> {
  response: DatagridPaginatedResponseType<T>
}
