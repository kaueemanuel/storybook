import { useTranslation } from "react-i18next"

import { Typography } from "@mui/material"

import { EmptyDataLogoSVG } from "../../Logos/EmptyDataLogoSVG/EmptyDataLogoSVG"
import { Container } from "./InputIconSearchEmpty.styles"

export const InputIconSearchEmpty = () => {
  const { t } = useTranslation()

  return (
    <Container data-testid="timeline-empty">
      <img src={EmptyDataLogoSVG} height={180} />
      <Typography variant="body2" fontWeight={500}>
        {t("common.notFound.title")}
      </Typography>
    </Container>
  )
}
