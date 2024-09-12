import React from "react"

import { CardContent as CardContentMUI, CardContentProps } from "@mui/material"

export const CardContent: React.FC<CardContentProps> = ({
  ...props
}: CardContentProps): React.ReactNode => (
  <CardContentMUI
    {...props}
    data-testid={props?.["data-testid"] || "card-content"}
  />
)
