import React from "react"

import { DialogTitle as DialogTitleMUI, DialogTitleProps } from "@mui/material"

export const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  ...props
}: DialogTitleProps): React.ReactNode => (
  <DialogTitleMUI {...props}>{children}</DialogTitleMUI>
)
