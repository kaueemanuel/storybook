import "moment/locale/pt-br"

import { useCallback, useMemo, useState } from "react"
import ReactDOM from "react-dom/client"
import { useTranslation } from "react-i18next"

import minBy from "lodash/minBy"
import moment from "moment/moment"

import { Stack, Tooltip } from "@mui/material"
import {
  GridPaginationModel,
  GridRenderCellParams,
  GridRowId,
  GridSortItem,
  GridSortModel,
} from "@mui/x-data-grid"

import i18n from "../../locales/i18n"
import { theme } from "../../themes"
import { ThemeProvider } from "../../themes/ThemeProvider/ThemeProvider"
import { Datagrid, DatagridProps } from "../Datagrid/Datagrid"
import { DatagridActionContainer } from "../Datagrid/Datagrid.styles"
import { DatagridAction } from "../Datagrid/DatagridAction/DatagridAction"
import { Icon } from "../Icons/Icon"
import { UserNameAvatar } from "../Templates/UserNameAvatar/UserNameAvatar"
import ExpandedContainer from "./ExpandedContainer/ExpandedContainer"
import { BadgeStyled } from "./RegistrationHistoryBase.styles"
import { DataRow } from "./RegistrationHistoryBase.types"

export interface RegistrationHistoryBaseProps {
  headerConfig?: {
    code: string
    title: string
  }
  data: DataRow[]
  pagination?: {
    page?: number
    pageSize?: number
    rowCount?: number
    onPageOptionsChange?: (newPage: number, newLimit: number) => void
  }
  sort?: GridSortItem
  onSortChange?: (sort: GridSortModel) => void
  onRestoreClick?: (
    registrationRowId: GridRowId,
    selectedFieldsIds: Array<{ field: string; id: string | number }>,
  ) => void
}

const RegistrationHistoryBase = ({
  headerConfig,
  data,
  onSortChange,
  onRestoreClick,
  pagination,
  sort,
}: RegistrationHistoryBaseProps) => {
  const { t } = useTranslation()

  const [openedRowId, setOpenedRowId] = useState<string>()

  const getDetailPanelContent: DatagridProps["getDetailPanelContent"] = (
    row: any,
  ) => (
    <ExpandedContainer
      header={headerConfig}
      data={row}
      onRestoreClick={(restoredFields) => {
        onRestoreClick && onRestoreClick(row.id, restoredFields)
      }}
    />
  )

  const closeOpenedRow = (id) => {
    const contentExpandedRowElement: any = document.querySelector(
      `[data-id-expanded-row="${id}"]`,
    )

    if (contentExpandedRowElement) {
      contentExpandedRowElement.classList.remove("opened")
      setTimeout(() => {
        contentExpandedRowElement?.remove()
      }, 425)
    }
  }

  const onRowExpandChange = useCallback(
    (expandedRow) => {
      const expandedRowElement: any = document.querySelector(
        `[data-id="${expandedRow.id}"]`,
      )

      if (expandedRowElement) {
        const expandedRowsElements: NodeListOf<any> = document.querySelectorAll(
          `[data-expanded="true"]`,
        )

        if (expandedRowsElements.length > 0) {
          expandedRowsElements.forEach((expandedRowElementAux) => {
            if (expandedRow.id !== expandedRowElementAux.dataset.id) {
              expandedRowElementAux.dataset.expanded = "false"
              closeOpenedRow(expandedRowElementAux.dataset.id)
            }
          })
        }

        if (!(expandedRowElement.dataset["expanded"] === "true")) {
          const expandedContent = document.createElement("div")
          expandedContent.dataset.idExpandedRow = expandedRow.id
          expandedContent.dataset.testId = "datagrid-expandable"
          expandedContent.classList.add("MuiDataGrid-row--expanded-content")

          expandedRowElement.insertAdjacentElement("afterend", expandedContent)
          expandedRowElement.dataset.expanded = "true"

          const datagridExpandableHtml = ReactDOM.createRoot(expandedContent)
          datagridExpandableHtml.render(
            <ThemeProvider i18nLang={i18n.language} theme={theme}>
              {getDetailPanelContent(expandedRow)}
            </ThemeProvider>,
          )

          setTimeout(() => {
            expandedContent.classList.add("opened")
          }, 10)

          setOpenedRowId(expandedRow.id)
          return
        }
        expandedRowElement.dataset.expanded = "false"
      }

      setOpenedRowId(undefined)
      closeOpenedRow(expandedRow.id)
    },
    [document, getDetailPanelContent],
  )

  const handleExpandClick = useCallback((expandedRow) => {
    onRowExpandChange(expandedRow)
  }, [])

  const firstDate = useMemo(
    () => minBy(data, (row) => moment(row.date, "DD/MM/YYYY [-] HH:mm")),
    [data],
  )

  return (
    <Datagrid
      onSortModelChange={(sort) => {
        onSortChange && onSortChange(sort)
      }}
      sortModel={sort ? [sort] : []}
      pagination={{
        page: pagination?.page ?? 0,
        pageSize: pagination?.pageSize ?? 100,
        rowCount: pagination?.rowCount ?? 0,
        tablePaginationProps: {
          onRowsPerPageChange: (evt) => {
            pagination?.onPageOptionsChange &&
              pagination.onPageOptionsChange(
                pagination?.page ?? 0,
                +evt.target.value,
              )
          },
        },
        onPaginationModelChange: ({ page, pageSize }: GridPaginationModel) => {
          pagination?.onPageOptionsChange &&
            pagination.onPageOptionsChange(page, pageSize)
        },
      }}
      expandableProps={{
        button: {
          color: "info",
        },
        borderColor: theme.palette.border.actived,
        bgColorRow: theme.palette.border["actived-bg"],
      }}
      rows={data}
      columns={[
        {
          field: "expand",
          headerName: "",
          sortable: false,
          align: "center",
          width: 88,
          renderCell: (params: GridRenderCellParams<DataRow>) => (
            <DatagridActionContainer
              onClick={(event) => {
                event.stopPropagation()
              }}
              key={params.row.id}
            >
              {params.row.id === firstDate?.id ? (
                <Tooltip title={t("tooltip.createdRecord")} placement="top">
                  <div>
                    <Icon
                      aria-label="created row"
                      name="check"
                      color="success"
                    />
                  </div>
                </Tooltip>
              ) : (
                <Stack
                  useFlexGap
                  spacing={1.8}
                  direction="row"
                  alignItems="center"
                >
                  <DatagridAction
                    key={"expanded-row-" + params.row.id}
                    icon="keyboard_arrow_right"
                    iconProps={{
                      className: "MuiDataGrid-row--expand-button",
                    }}
                    tooltip={t(
                      params.row.id === openedRowId
                        ? "tooltip.minimize"
                        : "tooltip.expand",
                    )}
                    onClick={() => handleExpandClick(params.row)}
                  />
                  {Array.isArray(params.row.changedFields) &&
                    params.row.changedFields.length > 0 && (
                      <Tooltip
                        placement="top"
                        title={t("tooltip_countRecords", {
                          count: params.row.changedFields.length,
                          plural:
                            params.row.changedFields.length > 1
                              ? t("text_s_plural")
                              : "",
                        })}
                      >
                        <BadgeStyled
                          max={99}
                          badgeContent={params.row.changedFields.length}
                        />
                      </Tooltip>
                    )}
                </Stack>
              )}
            </DatagridActionContainer>
          ),
        },
        {
          field: "date",
          headerName: t("registrationHistory_datagrid_column_date"),
          sortable: true,
        },
        {
          field: "user.name",
          headerName: t("registrationHistory_datagrid_column_responsible"),
          sortable: true,
          renderCell: (params: GridRenderCellParams<DataRow>) => (
            <UserNameAvatar
              userName={params.row.user.name}
              avatarUrl={params.row.user.avatarUrl}
              tooltip={params.row.user.name}
            />
          ),
        },
      ]}
    />
  )
}

export default RegistrationHistoryBase
