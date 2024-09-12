import styled from "@emotion/styled"

import { theme } from "../../themes"

interface ContainerProps {
  rounded?: boolean
  loading?: boolean
  fullWidth?: boolean
  width?: React.CSSProperties["width"]
}

export const Container = styled("div", {
  shouldForwardProp: (propName: string) =>
    !["width", "fullWidth", "rounded", "loading"].includes(propName),
})<ContainerProps>`
  position: relative;
  min-width: ${({ fullWidth, width }) => (fullWidth ? "100%" : width)};
  display: flex;
  flex-direction: column;

  .bars {
    flex: 1;
    display: flex;
    .Multicolor-determinateLinear-bar {
      transform: translate3d(0, 0, 0);
      border-block: 1px solid ${theme.palette.common.white};
      &:not(:last-child) {
        border-right: 1px solid ${theme.palette.common.white};
      }
    }
  }
  .legends {
    display: flex;
    margin-top: 16px;
    align-items: center;
    justify-content: space-around;
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
  ${({ rounded }) =>
    rounded && {
      ".bars div.bar:first-of-type": {
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
      },
      ".bars div.bar:last-of-type": {
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px",
      },
    }}
`

interface BarColorProps {
  width: React.CSSProperties["width"]
  height: React.CSSProperties["height"]
  color: React.CSSProperties["backgroundColor"]
}

export const BarColor = styled("div", {
  shouldForwardProp: (propName: string) =>
    !["width", "height", "color"].includes(propName),
})<BarColorProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color ?? theme.palette.grey[200]};
`

interface LegendProps {
  onClick?: () => void
  color: React.CSSProperties["backgroundColor"]
}

export const Legend = styled("div", {
  shouldForwardProp: (propName: string) => !["color"].includes(propName),
})<LegendProps>`
  padding: 8px;
  display: flex;
  align-items: baseline;
  cursor: ${({ onClick }) => (!onClick ? "default" : "pointer")};
  :hover {
    border-radius: 3px;
    transition: background ease 500ms;
    background-color: ${theme.palette.grey[100]};
  }
  .legend-dot {
    font-size: 16px;
    margin-right: 8px;
    color: ${({ color }) => color};
  }
  .legend-text {
    display: flex;
    flex-direction: column;
  }
  .legend-count {
    max-width: 58px;
    overflow: hidden;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
