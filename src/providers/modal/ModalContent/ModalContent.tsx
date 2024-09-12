import React from "react"

import { Box, BoxProps } from "@mui/material"

export interface ModalContentProps extends Partial<BoxProps> {
  children: React.ReactNode | string
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  ...props
}: ModalContentProps): React.ReactNode => (
  <Box className="box-content" {...props}>
    {children}
  </Box>
)
