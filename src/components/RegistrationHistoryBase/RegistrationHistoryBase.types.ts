import { GridRowId } from "@mui/x-data-grid"

/** modelo de dados necessários para o funcionamento do histórico */
export type DataRow = {
  id?: GridRowId
  date: string
  user: {
    name: string
    avatarUrl?: string
  }
  changedFields?: Array<{
    id: string
    field: string
    from: string
    to: string
  }>
}
