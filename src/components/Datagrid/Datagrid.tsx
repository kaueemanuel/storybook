/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"
import { useTranslation } from "react-i18next"

import { cloneDeep } from "lodash"
import { v1 as uuid } from "uuid"

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material"
import { Fade, Tooltip } from "@mui/material"
import {
  DataGrid as DatagridMUI,
  GridCallbackDetails,
  GridRenderCellParams,
  GridRowId,
  GridRowSelectionModel,
  GridSortModel,
  GridValidRowModel,
  DataGridProps as MUIDataGridProps,
} from "@mui/x-data-grid"

import { LoadingBrand } from "../../../lib/ui/components"
import i18n from "../../locales/i18n"
import { theme } from "../../themes"
import { ThemeProvider } from "../../themes/ThemeProvider/ThemeProvider"
import {
  Container,
  DatagridActionContainer,
  DatagridLoading,
} from "./Datagrid.styles"
import {
  DatagridAction,
  DatagridActionProps,
} from "./DatagridAction/DatagridAction"
import { DatagridEmpty } from "./DatagridEmpty/DatagridEmpty"
import { ConfigActionsType } from "./Types/ConfigActionsType"
import { DatagridColDef } from "./Types/DatagridColDef"
import { DatagridExpandable as DatagridExpandableType } from "./Types/DatagridExpandable"
import { DatagridPagination } from "./Types/DatagridPagination"
import { DatagridSelectedRow as DatagridSelectedRowType } from "./Types/DatagridSelectedRow"
export interface DatagridProps<R extends GridValidRowModel = any>
  extends Omit<
    MUIDataGridProps,
    | "paginationMode"
    | "sortingMode"
    | "onSortModelChange"
    | "columns"
    | "paginationModel"
    | "rowCount"
    | "onPaginationModelChange"
    | "pagination"
  > {
  contentMaxHeight?: string
  mode?: "server" | "client"
  loading?: boolean
  expandableRow?: boolean
  expandableProps?: DatagridExpandableType
  selectedRowProps?: DatagridSelectedRowType
  onSortModelChange?: (filter: GridSortModel) => void
  toolbar?: JSX.Element
  actionButtons?: JSX.Element
  columns: DatagridColDef<any>[]
  rowActions?: (row: R) => DatagridActionProps<R>[]
  configActions?: ConfigActionsType
  pagination?: DatagridPagination
  "data-testid"?: string
}

export const Datagrid: React.FC<DatagridProps> = ({
  contentMaxHeight = "100%",
  rows = [],
  mode = "server",
  columns,
  loading = false,
  toolbar = null,
  rowActions,
  configActions = {},
  pagination,
  expandableProps,
  selectedRowProps,
  expandableRow = false,
  "data-testid": dataTestid = "datagrid",
  slots,
  ...props
}) => {
  const { t } = useTranslation()
  const datagridRef = useRef<any>(null)
  const expandedRowRef = useRef<any>([])
  const [loadingHeight, setLoadingHeight] = useState(0)
  const [loadingBottom, setLoadingBottom] = useState(0)

  const renderExpandRow = () => {
    const expandColumn: DatagridColDef = {
      width: 60,
      maxWidth: 60,
      field: "expand",
      align: "center",
      renderHeader: () => <></>,
      renderCell: (params: GridRenderCellParams<any>) => {
        return (
          <DatagridActionContainer
            onClick={(event) => {
              event.stopPropagation()
            }}
            key={params.row.id}
          >
            <DatagridAction
              {...expandableProps?.button}
              icon="keyboard_arrow_right"
              iconProps={{
                ...expandableProps?.button?.iconProps,
                className: "MuiDataGrid-row--expand-button",
              }}
              onClick={() => {
                expandedRowRef.current[params.row.id] =
                  !expandedRowRef.current[params.row.id]
                onRowExpandChange(params.row)
              }}
              key={"expanded-row-" + params.row.id}
            />
          </DatagridActionContainer>
        )
      },
    }

    return expandColumn
  }

  const renderRowActions = () => {
    if (rowActions) {
      const withColumn = configActions?.width
        ? configActions.width
        : configActions?.maxWidth
          ? configActions.maxWidth
          : 120
      const actionColumn: DatagridColDef = {
        field: "actions",
        headerName: t("datagrid.actionColumn.headerName"),
        align: "center",
        ...configActions,
        width: withColumn,
        maxWidth: withColumn,
        renderCell: (params: GridRenderCellParams<any>) => {
          const actions = rowActions(params.row)
          return (
            <DatagridActionContainer
              onClick={(event) => {
                event.stopPropagation()
              }}
              key={params.row.id}
            >
              {actions.map((props) => (
                <DatagridAction
                  {...props}
                  onClick={() => props.onClick(params.row)}
                  key={props.icon + params.row.id}
                />
              ))}
            </DatagridActionContainer>
          )
        },
      }
      return actionColumn
    }
  }

  const formatRenderCell = (column: DatagridColDef) => {
    if (column.renderCell) {
      return {}
    }
    const fieldkeys = column.field.split(".")
    if (fieldkeys.length === 1) {
      return {}
    }
    return {
      renderCell: ({ row }) => {
        let value: any = row
        fieldkeys.forEach((key) => {
          value = value?.[key]
        })

        return typeof value === "object" ? "" : value
      },
    }
  }

  const setDefaultColumnsProps = (
    columns: DatagridColDef[],
  ): readonly DatagridColDef[] => {
    const columnsAux: any = cloneDeep(columns)
    const defaultConfigs: Partial<DatagridColDef> = {
      sortable: false,
      disableColumnMenu: true,
      searchable: false,
      searchOperation: "Contains",
      flex: 1,
      renderCell: ({ value }) => {
        return (
          <Tooltip placement="top" title={value}>
            <div>{value}</div>
          </Tooltip>
        )
      },
      renderHeader: ({ colDef }) => {
        return (
          <Tooltip placement="top" title={colDef.headerName}>
            <div>{colDef.headerName}</div>
          </Tooltip>
        )
      },
    }

    if (expandableRow) {
      const actionsIndex = columnsAux.findIndex(
        ({ field }) => field === "expand",
      )
      if (actionsIndex && actionsIndex === -1) {
        columns.unshift(renderExpandRow())
      }
    }

    if (rowActions) {
      const actionsIndex = columnsAux.findIndex(
        ({ field }) => field === "actions",
      )

      if (actionsIndex && actionsIndex !== -1) {
        columnsAux[actionsIndex] = {
          ...renderRowActions(),
          ...columnsAux[actionsIndex],
        }
      } else {
        columnsAux.push(renderRowActions())
      }
    }
    return columnsAux.map((column) => {
      const withColumn = column?.width
        ? column.width
        : column?.maxWidth
          ? column.maxWidth
          : undefined
      return {
        ...defaultConfigs,
        ...column,
        ...formatRenderCell(column),
        width: withColumn,
        maxWidth: withColumn,
      }
    })
  }

  const formatDefaultRows = (rows: readonly any[]): readonly GridRowId[] => {
    const rowsAux = cloneDeep(rows)
    if (rowsAux.length > 0 && rowsAux[0]?.id) {
      return rowsAux
    }
    if (rowsAux.length > 0 && rowsAux[0]?.code) {
      return rowsAux.map((row) => ({ id: row.code, ...row }))
    }
    return rowsAux.map((row) => ({ id: uuid(), ...row }))
  }

  const internalColumns = setDefaultColumnsProps(columns)

  const internalRows = formatDefaultRows(rows)

  const isEmpty = internalRows.length === 0

  const rowCount = {
    rowCount:
      mode === "server" ? (pagination?.rowCount ?? 0) : internalRows.length,
  }

  const paginationModel =
    (pagination?.page || pagination?.page === 0) && pagination?.pageSize
      ? {
          paginationModel: {
            page: +pagination.page,
            pageSize: +pagination.pageSize,
          },
        }
      : null

  const onPaginationModelChange = pagination?.onPaginationModelChange
    ? {
        onPaginationModelChange: pagination.onPaginationModelChange,
      }
    : null

  const getRowsByIds = useCallback(
    (ids: GridRowSelectionModel) => {
      const row = internalRows.filter((row: any) => ids.includes(row.id))
      return row
    },
    [internalRows],
  )

  const onRowSelectionModelChange = useCallback(
    (ids: GridRowSelectionModel, details: GridCallbackDetails<any>) => {
      if (props.onRowSelectionModelChange) {
        const rows: GridRowSelectionModel = getRowsByIds(ids)
        props.onRowSelectionModelChange(rows, details)
      }
    },
    [getRowsByIds, props],
  )

  const onRowExpandChange = (expandedRow) => {
    const expandedRowElement: HTMLElement = datagridRef.current.querySelector(
      `[data-id="${expandedRow.id}"]`,
    )

    if (expandedRowRef.current[expandedRow.id] && props.getDetailPanelContent) {
      const expandedContent = document.createElement("div")
      expandedContent.dataset.testId = "datagrid-expandable"
      expandedContent.dataset.idExpandedRow = expandedRow.id
      expandedContent.classList.add("MuiDataGrid-row--expanded-content")

      expandedRowElement.insertAdjacentElement("afterend", expandedContent)
      expandedRowElement.dataset.expanded = "true"

      const datagridExpandableHtml = createRoot(expandedContent)
      datagridExpandableHtml.render(
        <ThemeProvider i18nLang={i18n.language} theme={theme}>
          {props.getDetailPanelContent(expandedRow)}
        </ThemeProvider>,
      )

      setTimeout(() => {
        expandedContent.classList.add("opened")
      }, 10)

      return
    }

    const contentExpandedRowElement: HTMLElement =
      datagridRef.current.querySelector(
        `[data-id-expanded-row="${expandedRow.id}"]`,
      )

    expandedRowElement.dataset.expanded = "false"

    contentExpandedRowElement.classList.remove("opened")
    setTimeout(() => {
      contentExpandedRowElement?.remove()
    }, 425)
  }

  useEffect(() => {
    if (datagridRef?.current) {
      setLoadingHeight(
        datagridRef.current.querySelector(".MuiDataGrid-virtualScrollerContent")
          ?.clientHeight || 0,
      )
      setLoadingBottom(
        datagridRef.current.querySelector(".MuiDataGrid-footerContainer")
          ?.clientHeight || 0,
      )
    }
  }, [datagridRef?.current, loading])

  return (
    <Container
      contentMaxHeight={contentMaxHeight}
      isEmpty={isEmpty}
      loading={loading}
      data-testid={dataTestid}
      expandableProps={expandableProps}
      selectedRowProps={selectedRowProps}
    >
      {toolbar}
      <Fade in={loading} timeout={loading ? 200 : 0}>
        <DatagridLoading
          loadingHeight={isEmpty ? 100 : loadingHeight}
          loadingBottom={loadingBottom}
        >
          <LoadingBrand backgroundOpacity={0.8} />
        </DatagridLoading>
      </Fade>
      <DatagridMUI
        pageSizeOptions={[5, 10, 20, 25, 50, 100]}
        autoHeight
        disableRowSelectionOnClick
        {...rowCount}
        {...paginationModel}
        {...onPaginationModelChange}
        {...props}
        initialState={{
          pagination: {
            paginationModel: {
              page: pagination?.page ? pagination.page : 0,
              pageSize: pagination?.pageSize
                ? pagination.pageSize
                : mode === "client"
                  ? internalRows.length
                  : 10,
            },
          },
          ...props.initialState,
        }}
        ref={datagridRef}
        paginationMode={mode}
        sortingMode={mode}
        filterMode={mode}
        rows={internalRows}
        columns={internalColumns}
        onRowSelectionModelChange={onRowSelectionModelChange}
        localeText={{
          columnHeaderSortIconLabel: t("datagrid.columnHeaderSortIconLabel"),
          footerTotalRows: "Total Rows:",
          footerTotalVisibleRows: (visibleCount, totalCount) =>
            `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,
          footerRowSelected: (count) =>
            t("datagrid.footerRowSelected", { count }),
          MuiTablePagination: {
            labelDisplayedRows: ({ from, to, count }) => {
              return t("datagrid.pagination.labelDisplayedRows", {
                from,
                to,
                count,
              })
            },
            labelRowsPerPage: t("datagrid.pagination.labelRowsPerPage"),
            getItemAriaLabel: (type) => {
              let text = ""
              switch (type) {
                case "first":
                  text = t("datagrid.pagination.labelPage.first")
                  break
                case "last":
                  text = t("datagrid.pagination.labelPage.last")
                  break
                case "next":
                  text = t("datagrid.pagination.labelPage.next")
                  break
                case "previous":
                  text = t("datagrid.pagination.labelPage.previous")
                  break
              }
              return text
            },
            ...(pagination?.tablePaginationProps ?? {}),
          },
          ...props?.localeText,
        }}
        experimentalFeatures={{
          columnGrouping: true,
        }}
        slots={{
          noRowsOverlay: !loading ? DatagridEmpty : undefined,
          noResultsOverlay: !loading ? DatagridEmpty : undefined,
          columnSortedDescendingIcon: ArrowDropUp,
          columnSortedAscendingIcon: ArrowDropDown,
          ...(slots ?? {}),
        }}
        sx={{ "--DataGrid-overlayHeight": "300px" }}
        hideFooter={props?.hideFooter ? props.hideFooter : isEmpty}
      />
    </Container>
  )
}
