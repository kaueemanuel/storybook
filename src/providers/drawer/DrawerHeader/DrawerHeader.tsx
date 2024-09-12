import React from "react"

import { Box } from "@mui/material"

export interface DrawerHeaderProps {
  children: React.ReactNode | string
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  children,
}: DrawerHeaderProps): React.ReactNode => (
  <>
    <Box className="box-header">{children}</Box>
  </>
)
