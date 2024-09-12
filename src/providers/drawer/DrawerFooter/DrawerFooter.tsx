import React from "react"

import { Box } from "@mui/material"

export interface DrawerFooterProps {
  children: React.ReactNode | string
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({
  children,
}: DrawerFooterProps): React.ReactNode => (
  <>
    <Box className="box-footer">{children}</Box>
  </>
)
