import styled from "@emotion/styled"
import { ButtonGroup, alpha } from "@mui/material"

import { theme } from "../../themes"
import { IconButton } from "../IconButton/IconButton"

export const Container = styled.div`
  position: relative;
  width: fit-content;
`

export const IconButtonStyled = styled(IconButton)`
  &:hover {
    background-color: ${alpha(theme.palette.accent.main, 0.04)};
  }
`

export const ButtonGroupStyled = styled(ButtonGroup)`
  align-items: center;
  .MuiButtonGroup-grouped {
    padding: 0;
    min-width: auto;
    height: fit-content;
  }
  #popover-iconbutton {
    width: 16px;
  }
`
