import React from "react"

import { CardActions as CardActionsMUI, CardActionsProps } from "@mui/material"

export const CardActions: React.FC<CardActionsProps> = ({
  ...props
}: CardActionsProps): React.ReactNode => (
  <CardActionsMUI
    {...props}
    data-testid={props?.["data-testid"] || "card-actions"}
  />
)
