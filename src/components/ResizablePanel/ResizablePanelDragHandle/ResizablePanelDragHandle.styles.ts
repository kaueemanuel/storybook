import styled from "@emotion/styled"
import { Box } from "@mui/material"

import { theme } from "../../../themes"

export const DragButtonBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.palette.accent.main};
  > svg {
    font-size: 16px;
    transform: rotate(90deg);
  }
`
