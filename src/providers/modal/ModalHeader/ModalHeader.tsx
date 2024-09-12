import React from "react"

import { Box, BoxProps } from "@mui/material"

export interface ModalHeaderProps extends Partial<BoxProps> {
  children: React.ReactNode | string
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  ...props
}: ModalHeaderProps): React.ReactNode => (
  <Box className="box-header" {...props}>
    {children}
  </Box>
)
