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

export const LastUpdateBox = styled("div")`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 3rem;
  position: relative;
  z-index: 1;

  .icon-update {
    color: #979797;
  }
`
