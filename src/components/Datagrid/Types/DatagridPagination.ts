import { TablePaginationProps } from "@mui/material"
import { GridPaginationModel } from "@mui/x-data-grid"

export interface DatagridPagination {
  page: number
  pageSize: number
  rowCount: number
  onPaginationModelChange: (props: GridPaginationModel) => void
  tablePaginationProps?:
    | Omit<
        TablePaginationProps,
        "page" | "count" | "onPageChange" | "rowsPerPage" | "onChangePage"
      >
    | undefined
}

export type DatagridPaginatedResponseType<T> = {
  data: T[]
  records: number
  page: number
  limit: number
  pages: number
}
