import styled from "@emotion/styled"
import { Tabs as TabsMUI } from "@mui/material"

interface ContainerProps {
  loading: boolean
}

export const Container = styled("div", {
  shouldForwardProp: (propName: string) => propName !== "loading",
})<ContainerProps>``

export const TabsStyled = styled(TabsMUI)`
  .MuiButtonBase-root {
    font-size: 1rem;
    text-transform: none;

    &:not(.Mui-selected) {
      font-weight: 400;
    }
  }
  .MuiTabs-indicator {
    height: 3px;
  }

  .floating-tab {
    color: white;
    position: relative;
    padding-right: 20px;

    > div {
      position: absolute;
      top: -1px;
      right: -6px;
      padding: 0;
      margin: 0;
      cursor: pointer;
      z-index: 1;

      button {
        padding: 0 !important;
        margin: 0 !important;
        cursor: pointer;
      }
    }
  }
`
