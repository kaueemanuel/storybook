import { Trans } from "react-i18next"

import { Stack } from "@mui/material"

import { CardContent } from "../../../Card/CardContent/CardContent"
import { CardHeader } from "../../../Card/CardHeader/CardHeader"
import { IconButton } from "../../../IconButton/IconButton"
import {
  DataMultiColorDeterminateLinearProgressProps,
  MultiColorDeterminateLinearProgress,
} from "../../../MultiColorDeterminateLinearProgress/MultiColorDeterminateLinearProgress"
import { CardStyled } from "./MultiColorLinearProgressWidget.styles"

interface CounterMultiColorViewProps {
  title: string
  loading?: boolean
  data: DataMultiColorDeterminateLinearProgressProps[]
}

export const MultiColorLinearProgressWidget: React.FC<
  CounterMultiColorViewProps
> = ({ title, ...props }) => (
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
      <MultiColorDeterminateLinearProgress
        {...props}
        showLegend
        style={{
          marginTop: "8px",
        }}
      />
    </CardContent>
  </CardStyled>
)
