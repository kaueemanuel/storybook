import React from "react"

import { CardHeader as CardHeaderMUI, CardHeaderProps } from "@mui/material"

export const CardHeader: React.FC<CardHeaderProps> = ({
  ...props
}: CardHeaderProps): React.ReactNode => (
  <CardHeaderMUI
    {...props}
    data-testid={props?.["data-testid"] || "card-header"}
  />
)
