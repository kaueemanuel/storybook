import React from "react"

import {
  Box,
  DialogContent as DialogContentMUI,
  DialogContentProps as DialogContentPropsMUI,
} from "@mui/material"

export interface DialogContentProps extends DialogContentPropsMUI {
  children: React.ReactNode | string
}

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...props
}: DialogContentProps): React.ReactNode => (
  <>
    <DialogContentMUI {...props}>
      <Box className="box-content">{children}</Box>
    </DialogContentMUI>
  </>
)
