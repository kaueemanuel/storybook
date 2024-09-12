import React from "react"
import { Trans, useTranslation } from "react-i18next"

import { EChartsOption } from "echarts-for-react"
import { Moment } from "moment"

import { Stack, Typography } from "@mui/material"

import { CardContent } from "../../../Card/CardContent/CardContent"
import { CardHeader } from "../../../Card/CardHeader/CardHeader"
import { IconButton } from "../../../IconButton/IconButton"
import { Icon } from "../../../Icons/Icon"
import { RadarBarChart } from "../../../RadarBarChart/RadarBarChart"
import { CardStyled, LastUpdateBox } from "./RadarBarWidget.styles"

interface RadarBarWidgetProps {
  title: string
  data: EChartsOption
  loading?: boolean
  datetimeUpdate?: Moment
}

export const RadarBarWidget: React.FC<RadarBarWidgetProps> = ({
  title,
  data,
  datetimeUpdate,
  ...props
}) => {
  const { t } = useTranslation()
  return (
    <CardStyled>
      <CardHeader
        title={<Trans>{title}</Trans>}
        titleTypographyProps={{ variant: "body1" }}
        sx={{ borderBottom: 1, borderColor: "divider", height: "44px" }}
        action={
          <Stack
            useFlexGap
            direction="row"
            style={{ position: "relative", top: "-7px" }}
          >
            <IconButton
              size="small"
              icon="drag_indicator"
              iconProps={{ fill: true }}
              className="button-draggable"
              onClick={() => {}}
            />
          </Stack>
        }
      />
      <CardContent>
        <RadarBarChart {...props} data={data}>
          {datetimeUpdate && (
            <LastUpdateBox>
              <Icon name="update" className="icon-update" />
              <Typography variant="body2">
                <Trans
                  i18nKey="home.widgets.lastUpdate.label"
                  values={{
                    time: datetimeUpdate?.calendar({
                      lastDay: t("moment.lastDay"),
                      sameDay: t("moment.sameDay"),
                      lastWeek: t("moment.lastWeek"),
                    }),
                  }}
                >
                  Last Update <strong></strong>
                </Trans>
              </Typography>
            </LastUpdateBox>
          )}
        </RadarBarChart>
      </CardContent>
    </CardStyled>
  )
}
