import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

import { Tooltip } from "@mui/material"

import { theme } from "../../themes"
import {
  ActionPopoverListProps,
  IconButtonPopoverActions,
} from "../IconButtonPopoverActions/IconButtonPopoverActions"
import { IconNameType } from "../Icons/IconNameType"
import {
  ButtonGroupStyled,
  Container,
  IconButtonStyled,
} from "./DatagridRefreshTimer.styles"

export type RefreshTimeType = 1 | 5 | 10 | 15 | 0

type RefreshTimeIntervalType = 60000 | 300000 | 600000 | 900000 | undefined

interface DataRefreshTimeProps {
  label: string
  icon: IconNameType
  time?: RefreshTimeIntervalType
}

type DataRefreshTimeKeyProps = {
  [key in RefreshTimeType]: DataRefreshTimeProps
}

export interface DatagridRefreshTimerProps {
  actionRefresh: () => void
  /**
   * @default 0 - Manual option
   */
  times?: RefreshTimeType[]
  defaultRefreshTime?: RefreshTimeType
  getRefreshTime?: (refresgTime: RefreshTimeType) => void
  title?: string
}

export const DatagridRefreshTimer: React.FC<DatagridRefreshTimerProps> = ({
  actionRefresh,
  times = [0, 1, 5, 10, 15],
  defaultRefreshTime = 0,
  getRefreshTime,
  title,
}) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const [refreshTime, setRefreshTime] =
    useState<RefreshTimeType>(defaultRefreshTime)

  const dataRefreshTimes: DataRefreshTimeKeyProps = {
    0: {
      time: undefined,
      icon: "refresh_timer_pgv",
      label: t("datagrid.toolbar.refreshSplitButton.manual"),
    },
    1: {
      time: 60000,
      icon: "refresh_timer_1_pgv",
      label: t("datagrid.toolbar.refreshSplitButton.1minute"),
    },
    5: {
      time: 300000,
      icon: "refresh_timer_5_pgv",
      label: t("datagrid.toolbar.refreshSplitButton.5minutes"),
    },
    10: {
      time: 600000,
      icon: "refresh_timer_10_pgv",
      label: t("datagrid.toolbar.refreshSplitButton.10minutes"),
    },
    15: {
      time: 900000,
      icon: "refresh_timer_15_pgv",
      label: t("datagrid.toolbar.refreshSplitButton.15minutes"),
    },
  }

  const actionsTime: ActionPopoverListProps[] = useMemo<any>(
    () =>
      times.map((timeValue) => {
        const { icon, label } = dataRefreshTimes[timeValue]

        return {
          icon,
          label,
          iconProps: {
            fontSize: "medium",
            style: {
              color: theme.palette.icon.action,
            },
          },
          onClick: () => {
            setRefreshTime(timeValue)
            if (getRefreshTime) {
              getRefreshTime(timeValue)
            }
          },
        }
      }),
    [times, dataRefreshTimes],
  )

  useEffect(() => {
    if (dataRefreshTimes[refreshTime].time) {
      const interval = setInterval(() => {
        if (refreshTime) {
          actionRefresh()
        }
      }, dataRefreshTimes[refreshTime].time)

      return () => {
        clearInterval(interval)
      }
    }
  }, [refreshTime, dataRefreshTimes])

  return (
    <Container>
      <Tooltip
        title={!open ? (title ?? t("tooltip_data_update")) : ""}
        placement="top"
        disableInteractive
      >
        <ButtonGroupStyled variant="text">
          <IconButtonStyled
            onClick={actionRefresh}
            disableFocusRipple
            disableTouchRipple
            icon={dataRefreshTimes[refreshTime].icon}
          />
          <IconButtonPopoverActions
            disableFocusRipple
            disableTouchRipple
            disableRipple
            icon={open ? "arrow_drop_up" : "arrow_drop_down"}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            actions={actionsTime}
          />
        </ButtonGroupStyled>
      </Tooltip>
    </Container>
  )
}
