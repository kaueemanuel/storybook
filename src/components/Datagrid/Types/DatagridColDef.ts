/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridActionsColDef, GridValidRowModel } from "@mui/x-data-grid"
import { GridBaseColDef, GridSingleSelectColDef } from "@mui/x-data-grid/internals"

export type DatagridColDef<
  R extends GridValidRowModel = any,
  V = any,
  F = V
> = (
  | GridBaseColDef<R, V, F>
  | GridActionsColDef<R, V, F>
  | GridSingleSelectColDef<R, V, F>
) & {
  searchable?: boolean
  searchOperation?: "Contains" | "Equals"
}