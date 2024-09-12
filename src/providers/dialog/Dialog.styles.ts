import styled from "@emotion/styled"
import { Dialog as DialogMUI } from "@mui/material"

import { theme } from "../../themes"

interface DialogRootProps {
  width?: React.CSSProperties["width"]
  height?: React.CSSProperties["height"]
}

interface DialogContainerProps {
  loading?: boolean
}

export const Dialog = styled(DialogMUI)<DialogRootProps>`
  .MuiDialog-paper {
    overflow: hidden;
  }
`

export const DialogContainer = styled("div", {
  shouldForwardProp: (propName: string) => propName !== "loading",
})<DialogContainerProps>`
  .box-dialog,
  .box-content {
    display: flex;
    flex-direction: column;
  }

  .box-content {
    align-items: center;
  }

  .loading {
    transition: 0.5s;
    position: absolute;
    display: flex;
    opacity: ${({ loading }) => (loading ? "1" : "0")};
    visibility: ${({ loading }) => (loading ? "visible" : "hidden")};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: ${theme.palette.background.default};
  }
`
