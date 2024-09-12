import styled from "@emotion/styled"
import { Modal as ModalMUI } from "@mui/material"

import { theme } from "../../themes"

interface ModalRootProps {
  width?: React.CSSProperties["width"]
  height?: React.CSSProperties["height"]
}

export const Modal = styled(ModalMUI)<ModalRootProps>``

interface ModalContainerProps {
  loading?: boolean
  maxWidth?: string
  maxHeight?: string
}

export const ModalContainer = styled("div", {
  shouldForwardProp: (propName: string) =>
    !["loading", "maxWidth", "maxHeight"].includes(propName),
})<ModalContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.background.paper};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};

  .box-modal {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .box-header {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    padding: ${theme.spacing(3)};
    flex-shrink: 0;
    position: sticky;
    top: 0;
  }

  .box-content {
    flex: 1;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    padding: ${theme.spacing(0, 3)};
  }

  .box-actions {
    bottom: 0;
    padding: ${theme.spacing(3)};
    display: flex;
    position: sticky;
    flex-shrink: 0;
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
