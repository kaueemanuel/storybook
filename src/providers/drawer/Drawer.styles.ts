import styled from "@emotion/styled"
import { Drawer as DrawerMUI } from "@mui/material"

import { theme } from "../../themes"

interface DrawerRootProps {
  fullscreen: boolean
  width?: React.CSSProperties["width"]
  height?: React.CSSProperties["height"]
}

export const Drawer = styled(DrawerMUI, {
  shouldForwardProp: (propName: string) =>
    !["fullscreen", "height", "width"].includes(propName),
})<DrawerRootProps>`
  .MuiDrawer-paper {
    overflow: hidden;
  }
  .MuiDrawer-paperAnchorTop,
  .MuiDrawer-paperAnchorBottom {
    width: 100%;
    height: ${({ height, fullscreen }) => (!fullscreen ? height : "100%")};
  }
  .MuiDrawer-paperAnchorRight,
  .MuiDrawer-paperAnchorLeft {
    height: 100%;
    width: ${({ width, fullscreen }) => (!fullscreen ? width : "100%")};
  }
`

interface DrawerContainerProps {
  loading?: boolean
  positionLeft: boolean
}

export const DrawerContainer = styled("div", {
  shouldForwardProp: (propName: string) =>
    propName !== "loading" && propName !== "positionLeft",
})<DrawerContainerProps>`
  .buttons-header {
    z-index: 3;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ positionLeft }) =>
      positionLeft ? "row-reverse" : "row"};
  }

  .box-header {
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing(1, 6)};
    padding-bottom: ${theme.spacing(2)};
    position: sticky;
    top: 0px;
    background: ${theme.palette.background.default};
    flex-shrink: 0;
  }

  .box-drawer {
    height: calc(100vh - 33px);
    bottom: 0;
    display: flex;
    flex-direction: column;
  }

  .box-content {
    padding: ${theme.spacing(2, 6)};
    overflow-y: auto;
    flex: 1;
  }

  .box-footer {
    bottom: 0px;
    position: sticky;
    padding: ${theme.spacing(3, 6)};
    background: ${theme.palette.background.default};
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
