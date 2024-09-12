import { SxProps, Theme } from "@mui/material"

import { theme } from "../../themes"

export const popoverPaperStyles: SxProps<Theme> = {
  backgroundColor: theme.palette.system["blue-800"],
  color: theme.palette.surface.surface1,
}
