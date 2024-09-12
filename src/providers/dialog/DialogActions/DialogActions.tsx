import React from "react"

import {
  DialogActions as DialogActionsMUI,
  DialogActionsProps,
} from "@mui/material"

export const DialogActions: React.FC<DialogActionsProps> = ({
  children,
  ...props
}: DialogActionsProps): React.ReactNode => (
  <DialogActionsMUI {...props}>{children}</DialogActionsMUI>
)
