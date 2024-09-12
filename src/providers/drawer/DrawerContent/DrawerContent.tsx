import React from "react"

import { Box } from "@mui/material"

export interface DrawerContentProps {
  children: React.ReactNode | string
}

export const DrawerContent: React.FC<DrawerContentProps> = ({
  children,
}: DrawerContentProps): React.ReactNode => (
  <>
    <Box className="box-content">{children}</Box>
  </>
)
