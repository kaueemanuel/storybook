import { Trans } from "react-i18next"

import { Stack } from "@mui/material"

import { CardContent } from "../../../Card/CardContent/CardContent"
import { CardHeader } from "../../../Card/CardHeader/CardHeader"
import { IconButton } from "../../../IconButton/IconButton"
import {
  DataSefazCountryInputProps,
  SefazCountry,
} from "../../../SefazCountry/SefazCountry"
import { CardStyled } from "./SefazCountryWidget.styles"

interface SefazCountryWidgetProps {
  title: string
  loading?: boolean
  data: DataSefazCountryInputProps
}

export const SefazCountryWidget: React.FC<SefazCountryWidgetProps> = ({
  title,
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
      <SefazCountry
        {...props}
        style={{
          marginTop: "8px",
        }}
      />
    </CardContent>
  </CardStyled>
)
