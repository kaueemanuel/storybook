import React from "react"

import { Box, BoxProps } from "@mui/material"

export interface ModalActionsProps extends Partial<BoxProps> {
  children: React.ReactNode | string
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  children,
  ...props
}: ModalActionsProps): React.ReactNode => (
  <Box className="box-actions" {...props}>
    {children}
  </Box>
)
