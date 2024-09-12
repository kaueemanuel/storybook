import React from "react"

import { Box, BoxProps } from "@mui/material"

export interface PopperContentProps extends BoxProps {
  children: React.ReactNode | string
}

export const PopperContent: React.FC<PopperContentProps> = ({
  children,
  ...props
}: PopperContentProps): React.ReactNode => (
  <>
    <Box className="box-content" {...props}>
      {children}
    </Box>
  </>
)
