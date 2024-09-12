import React from "react"

import {
  DialogContentText as DialogContentTextMUI,
  DialogContentTextProps,
} from "@mui/material"

export const DialogContentText: React.FC<DialogContentTextProps> = ({
  children,
  ...props
}: DialogContentTextProps): React.ReactNode => (
  <DialogContentTextMUI {...props}>{children}</DialogContentTextMUI>
)
