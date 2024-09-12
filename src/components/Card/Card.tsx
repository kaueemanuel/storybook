import React from "react"

import { Card as CardMUI, CardProps as CardPropsMUI } from "@mui/material"

export interface CardProps extends CardPropsMUI {
  children: React.ReactNode | string
  "data-testid"?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  "data-testid": dataTestid = "card",
  ...props
}) => {
  return (
    <CardMUI {...props} data-testid={dataTestid}>
      {children}
    </CardMUI>
  )
}
