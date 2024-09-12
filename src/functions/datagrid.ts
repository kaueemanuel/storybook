/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneDeep } from "lodash"

import { GridSortModel } from "@mui/x-data-grid"

import { DatagridColDef } from "../components/Datagrid/Types/DatagridColDef"
import {
  DatagridParamsFilterType,
  DatagridParamsType,
  FilterValueType,
} from "../patterns/datagrid/types/DatagridParamsTypes"
import { DatagridStoreBase } from "../patterns/datagrid/types/DatagridStoreBase"

export const onParamOrdering = (filter: GridSortModel): DatagridParamsType => {
  return {
    order: filter[0]?.field
      ? [
          {
            PropertyName: filter[0].field,
            Dir: filter[0]?.sort === "asc" ? "a" : "d",
          },
        ]
      : [],
  }
}

export const onParamsSearch = (
  value: string,
  columns: readonly DatagridColDef[],
): DatagridParamsFilterType => {
  const empty: DatagridParamsFilterType = { Connector: "Or", Values: [] }
  if (!value) return empty

  const values: Array<FilterValueType> = []
  columns.forEach((column: DatagridColDef) => {
    if (column.searchable) {
      values.push({
        PropertyName: column.field,
        Value: value,
        Operation: column?.searchOperation
          ? column.searchOperation
          : "Contains",
      })
    }
  })
  if (values.length === 0) return empty

  return {
    Connector: "Or",
    Values: values,
  }
}

export const onAdvancedFilter = (
  index: number,
  value: string | number | boolean | null,
  filters: DatagridParamsFilterType,
): DatagridParamsFilterType => {
  const filtersAux = cloneDeep(filters)
  filtersAux.Values[index] = {
    ...filtersAux.Values[index],
    Value: value,
  }
  return filtersAux
}

export function setDatagridSearchFilter<T extends DatagridStoreBase = any>(
  filter: DatagridParamsFilterType,
  set: (partial: (state: T) => any, replace?: boolean | undefined) => void,
  get: () => T,
) {
  set(() => ({ searchFilter: filter }))
  if (
    get().searchFilter?.Values.length === 0 &&
    get().advancedFilter?.Values.length === 0
  ) {
    set((state: T) => ({
      params: {
        ...state.params,
        filter: undefined,
      },
    }))
  } else {
    set((state) => {
      if (state.advancedFilter && state.searchFilter) {
        return {
          params: {
            ...state.params,
            filter: {
              Connector: state.searchFilter?.Connector || "Or",
              Values: [
                ...state.advancedFilter.Values,
                ...state.searchFilter.Values,
              ],
            },
          },
        }
      } else {
        return {
          params: {
            ...state.params,
            filter: {
              Connector: state.searchFilter?.Connector || "Or",
              Values: state.searchFilter?.Values
                ? [...state.searchFilter.Values]
                : [],
            },
          },
        }
      }
    })
  }
}

export function setDatagridAdvancedFilter<T extends DatagridStoreBase = any>(
  filter: DatagridParamsFilterType,
  set: (partial: (state: T) => any, replace?: boolean | undefined) => void,
  get: () => T,
) {
  set(() => ({
    advancedFilter: {
      ...filter,
      Values: filter.Values.filter((f) => f?.Value),
    },
  }))
  if (
    get().searchFilter?.Values.length === 0 &&
    get().advancedFilter?.Values.length === 0
  ) {
    set((state) => ({
      params: {
        ...state.params,
        filter: undefined,
      },
    }))
  } else {
    set((state) => {
      if (state.advancedFilter && state.searchFilter) {
        return {
          params: {
            ...state.params,
            filter: {
              Connector: state.advancedFilter?.Connector || "Or",
              Values: [
                ...state.searchFilter.Values,
                ...state.advancedFilter.Values,
              ],
            },
          },
        }
      } else {
        return {
          params: {
            ...state.params,
            filter: {
              Connector: state.advancedFilter?.Connector || "Or",
              Values: state.advancedFilter?.Values
                ? [...state.advancedFilter.Values]
                : [],
            },
          },
        }
      }
    })
  }
}
