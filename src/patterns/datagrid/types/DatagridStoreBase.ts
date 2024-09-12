/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DatagridParamsFilterType,
  DatagridParamsType,
} from "./DatagridParamsTypes"

export interface DatagridStoreBase<T = any> {
  values: T
  fetchData: (...args: any) => Promise<void>
  params: DatagridParamsType
  setParams: (params: Partial<DatagridParamsType>) => void
  searchFilter?: DatagridParamsFilterType
  setSearchFilter?: (filter: DatagridParamsFilterType) => void
  advancedFilter?: DatagridParamsFilterType
  setAdvancedFilter?: (filter: DatagridParamsFilterType) => void
  page: number
  onPageChange: (page: number, limit?: number) => void
  loading: boolean
  refreshData?: () => Promise<void>
}
