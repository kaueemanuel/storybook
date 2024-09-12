import { useTranslation } from "react-i18next"

import { InputLabelProps } from "@mui/material"

import { InputLabel as InputLabelStyled } from "./InputLabel.styles"

export interface Props extends InputLabelProps {
  children: React.ReactNode | string
}

export const InputLabel: React.FC<Props> = ({
  children,
  required,
  ...props
}) => {
  const { t } = useTranslation()
  return (
    <InputLabelStyled {...props}>
      {children}
      {!required && ` ${t("inputLabel.optional")}`}
    </InputLabelStyled>
  )
}
