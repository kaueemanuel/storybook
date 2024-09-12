import React from "react"
import { Trans } from "react-i18next"

import { EChartsOption } from "echarts-for-react"

import { Stack } from "@mui/material"

import { CardContent } from "../../../Card/CardContent/CardContent"
import { CardHeader } from "../../../Card/CardHeader/CardHeader"
import { DoughnutPieChart } from "../../../DoughnutPieChart/DoughnutPieChart"
import { IconButton } from "../../../IconButton/IconButton"
import { CardStyled } from "./DoughnutPieWidget.styles"

interface DoughnutPieWidgetProps {
  title: string
  data: EChartsOption
  loading?: boolean
}

export const DoughnutPieWidget: React.FC<DoughnutPieWidgetProps> = ({
  title,
  data,
  ...props
}) => (
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
      <DoughnutPieChart {...props} data={data} />
    </CardContent>
  </CardStyled>
)
