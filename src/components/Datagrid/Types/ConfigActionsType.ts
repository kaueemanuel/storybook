import { DatagridColDef } from "./DatagridColDef"

export type ConfigActionsType = Omit<
  DatagridColDef,
  "renderCell" | "field" | "searchable" | "searchOperation" | "sortable"
>