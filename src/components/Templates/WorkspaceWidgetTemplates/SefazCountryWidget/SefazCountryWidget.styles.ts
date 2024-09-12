import styled from "@emotion/styled"

import { theme } from "../../../../themes"
import { Card } from "../../../Card/Card"

export const CardStyled = styled(Card)`
  width: 100%;
  height: 100%;

  .button-draggable {
    color: ${theme.palette.accent.main};
  }
`
