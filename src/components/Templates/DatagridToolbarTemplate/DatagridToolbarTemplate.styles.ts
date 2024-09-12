import styled from "@emotion/styled"
import { alpha } from "@mui/material"

import { theme } from "../../../themes"
import { IconButton } from "../../IconButton/IconButton"

export const IconButtonStyled = styled(IconButton)`
  &:hover {
    background-color: ${alpha(theme.palette.accent.main, 0.04)};
  }
`
