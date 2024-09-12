import { useTranslation } from "react-i18next"

import { Typography } from "@mui/material"

import { EmptyDataLogoSVG } from "../../Logos/EmptyDataLogoSVG/EmptyDataLogoSVG"
import { Container } from "./TimelineEmpty.styles"

export const TimelineEmpty = () => {
  const { t } = useTranslation()

  return (
    <Container data-testid="timeline-empty">
      <img src={EmptyDataLogoSVG} height={150} />
      <Typography variant="body2" fontWeight={500}>
        {t("timeline.notFound.title")}
      </Typography>
    </Container>
  )
}
