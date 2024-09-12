import React from "react"

import { Card as CardMUI, CardProps as CardPropsMUI } from "@mui/material"

export interface DatagridCardProps extends CardPropsMUI {
  children: React.ReactNode | string
  "data-testid"?: string
}

export const DatagridCard: React.FC<DatagridCardProps> = ({
  children,
  "data-testid": dataTestid = "datagrid-card",
  ...props
}) => {
  return (
    <CardMUI
      {...props}
      data-testid={dataTestid}
      sx={{
        ...props.sx,
        borderRadius: "1rem",
      }}
    >
      {children}
    </CardMUI>
  )
}
