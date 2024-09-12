import styled from "@emotion/styled"
import { Box } from "@mui/material"

import { theme } from "../../../themes"

export const BoxStyled = styled(Box)`
  border-color: ${theme.palette.divider};
  border-width: 1px;
  border-style: solid;
`
