import React, { ChangeEvent, useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"

import { cloneDeep } from "lodash"

import { Divider, Stack } from "@mui/material"

import { theme } from "../../../themes"
import { DatagridToolbar } from "../../Datagrid/DatagridToolbar/DatagridToolbar"
import { DatagridCardHeaderTitle } from "../../DatagridCard/DatagridCardHeader/DatagridCardHeaderTitle/DatagridCardHeaderTitle"
import { DatagridInputSearch } from "../../DatagridInputSearch/DatagridInputSearch"
import {
  DatagridRefreshTimer,
  RefreshTimeType,
} from "../../DatagridRefreshTimer/DatagridRefreshTimer"
import { IconButton } from "../../IconButton/IconButton"
import {
  ActionPopoverListProps,
  IconButtonPopoverActions,
} from "../../IconButtonPopoverActions/IconButtonPopoverActions"
import { IconNameType } from "../../Icons/IconNameType"

export interface SearchOptionDatagridToolbarTemplate {
  show: boolean
  handleOnSearch: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export interface RefreshTimerOptionDatagridToolbarTemplate {
  show: boolean
  fetchData: () => void
  defaultRefreshTime?: RefreshTimeType
  setDefaultRefreshTime?: (time: RefreshTimeType) => void
}

export interface MoreActionDatagridToolbarTemplate {
  onClick?: () => void
  show?: boolean
}

export interface MoreActionsOptionDatagridToolbarTemplate {
  show: boolean
  print?: MoreActionDatagridToolbarTemplate
  exportPdf?: MoreActionDatagridToolbarTemplate
  exportCsv?: MoreActionDatagridToolbarTemplate
}

export interface ToolbarActionsOptionDatagridToolbarTemplate {
  icon: {
    name: IconNameType
    color?:
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning"
      | "inherit"
  }
  tooltip?: string
  disabled?: boolean
  visible?: boolean
  onClick: () => void
}

export interface OptionsDatagridToolbarTemplate {
  search?: SearchOptionDatagridToolbarTemplate
  refreshTimer?: RefreshTimerOptionDatagridToolbarTemplate
  moreActions?: MoreActionsOptionDatagridToolbarTemplate
  actions?: ToolbarActionsOptionDatagridToolbarTemplate[]
}

export interface DatagridToolbarTemplateProps {
  title: string
  options: OptionsDatagridToolbarTemplate
  renderOptions?: React.ReactNode
}

export const DatagridToolbarTemplate: React.FC<
  DatagridToolbarTemplateProps
> = ({ title, options, renderOptions }) => {
  const { t } = useTranslation()

  const exportPdf = () => {
    if (options.moreActions?.exportPdf?.onClick) {
      options.moreActions?.exportPdf?.onClick()
    }
  }

  const exportCsv = () => {
    if (options.moreActions?.exportCsv?.onClick) {
      options.moreActions?.exportCsv?.onClick()
    }
  }

  const print = () => {
    if (options.moreActions?.print?.onClick) {
      options.moreActions?.print?.onClick()
    }
  }

  const renderToolbarActions = useMemo(
    () =>
      options.actions && (
        <Stack useFlexGap direction="row" columnGap={1}>
          {options.actions
            .filter((x) => x.visible ?? true)
            .map(({ icon, onClick, tooltip, disabled }, index) => (
              <IconButton
                key={index}
                icon={icon.name}
                color={icon.color}
                onClick={onClick}
                tooltip={tooltip}
                disabled={disabled}
              />
            ))}
        </Stack>
      ),
    [options.actions],
  )

  const renderMoreActionsDefault = useCallback(() => {
    const moreActions: ActionPopoverListProps[] = []
    const moreActionsAux: any = cloneDeep(options?.moreActions)

    if (moreActionsAux?.show) {
      if (!moreActionsAux?.print || moreActionsAux.print?.show) {
        moreActions.push({
          onClick: print,
          label: t("datagrid.toolbar.print"),
          icon: "print",
          iconProps: {
            fontSize: "medium",
            style: {
              color: theme.palette.icon.action,
            },
          },
        })
      }

      if (!moreActionsAux?.exportPdf || moreActionsAux.exportPdf?.show) {
        moreActions.push({
          onClick: exportPdf,
          label: t("datagrid.toolbar.exportPdf"),
          icon: "document_pdf_pgv",
          iconProps: {
            fontSize: "medium",
            style: {
              color: theme.palette.icon.action,
            },
          },
        })
      }

      if (!moreActionsAux?.exportCsv || moreActionsAux.exportCsv?.show) {
        moreActions.push({
          onClick: exportCsv,
          label: t("datagrid.toolbar.exportCsv"),
          icon: "document_csv_pgv",
          iconProps: {
            fontSize: "medium",
            style: {
              color: theme.palette.icon.action,
            },
          },
        })
      }

      return (
        moreActionsAux?.show && (
          <IconButtonPopoverActions icon="more_vert" actions={moreActions} />
        )
      )
    }
  }, [options.moreActions])

  return (
    <DatagridToolbar
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: "8px 16px 8px 16px",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      }}
    >
      <Stack useFlexGap columnGap={4} direction="row" alignItems="center">
        <DatagridCardHeaderTitle title={title} />
        <Divider orientation="vertical" variant="middle" flexItem />
        {renderToolbarActions}
      </Stack>
      <Stack useFlexGap gap={0.25} direction="row" alignItems="center">
        {renderOptions ?? (
          <>
            {options.search?.show && (
              <DatagridInputSearch
                label=""
                sx={{ marginRight: 1, minWidth: 343 }}
                onChange={options.search.handleOnSearch}
              />
            )}

            {options.refreshTimer?.show && (
              <DatagridRefreshTimer
                actionRefresh={options.refreshTimer.fetchData}
                getRefreshTime={options.refreshTimer.setDefaultRefreshTime}
                defaultRefreshTime={
                  options.refreshTimer.defaultRefreshTime ?? 15
                }
              />
            )}

            {renderMoreActionsDefault()}
          </>
        )}
      </Stack>
    </DatagridToolbar>
  )
}
