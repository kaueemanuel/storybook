export type FilterConnectorType = "Or" | "And"
export interface FilterValueType {
  PropertyName: string
  Value: string | number | boolean | null
  Operation:
    | "Contains"
    | "Equals"
    | "StartsWith"
    | "EndsWith"
    | "NotEquals"
    | "GreaterThan"
    | "GreaterThanOrEquals"
    | "LessThan"
    | "LessThanOrEquals"
}

export interface DatagridParamsFilterType {
  Connector: FilterConnectorType
  Values: Array<FilterValueType> | []
}

export type OrderDirType = "a" | "d"

export interface OrderType {
  PropertyName: string
  Dir: OrderDirType
}

export interface DatagridParamsType {
  page?: number
  limit?: number
  order?: OrderType[] | []
  filter?: DatagridParamsFilterType
}
