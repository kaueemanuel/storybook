import { useTranslation } from "react-i18next"

import { Typography } from "@mui/material"

import { EmptyDataLogoSVG } from "../../Logos/EmptyDataLogoSVG/EmptyDataLogoSVG"
import { Container } from "./DatagridEmpty.styles"

export const DatagridEmpty = () => {
  const { t } = useTranslation()
  return (
    <Container data-testid="datagrid-empty">
      <img src={EmptyDataLogoSVG} width={"251"} />
      <Typography variant="body1">{t("datagrid.notFound.title")}</Typography>
    </Container>
  )
}
