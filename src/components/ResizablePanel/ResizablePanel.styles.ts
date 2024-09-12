import { PanelGroupProps } from "react-resizable-panels"

import styled from "@emotion/styled"
import { Box } from "@mui/material"

interface PanelGroupBoxProps {
  direction: PanelGroupProps["direction"]
}

export const PanelGroupBox = styled(Box)<PanelGroupBoxProps>`
  width: 100%;
  height: 100%;
  .resizable-panel-group {
    div[role="separator"] {
      display: flex;
      min-width: 16px;
      min-height: 16px;

      ${({ direction }) =>
        direction === "vertical" &&
        ` .drag-button {
          flex: 1;
          > svg {
            transform: none;
          }
        }
    `}
    }
  }
`
