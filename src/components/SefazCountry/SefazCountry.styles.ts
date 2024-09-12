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

  .normal-color {
    fill: #28af5a;
  }

  .slow-color {
    fill: #fed34c;
  }

  .stopped-color {
    fill: #fc6c21;
  }

  .container-image {
    flex: 1;
    display: flex;
    pointer-events: none;
    justify-content: center;
    svg {
      width: auto;
      height: 305px;

      rect {
        transition: fill 0.2s ease-in-out;
      }

      path {
        transition: fill 0.2s ease-in-out;
        &.normal-color,
        &.slow-color,
        &.stopped-color {
          fill: ${theme.palette.common.white};
        }
      }
    }
  }
  .legends {
    display: flex;
    margin-top: 24px;
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

interface LegendProps {}

export const Legend = styled("div", {
  shouldForwardProp: (propName: string) => !["color"].includes(propName),
})<LegendProps>`
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    border-radius: 3px;
    transition: background ease 500ms;
    background-color: ${theme.palette.grey[100]};
  }

  .legend-square {
    display: flex;
    margin-right: 8px;
    pointer-events: none;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    transition: background-color ease 500ms;
    background-color: ${theme.palette.system.divider};
  }

  .legend-text {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    pointer-events: none;
    flex-direction: column;
    color: ${theme.palette.text.primary};
  }

  &.normal-color:not(.hidden) {
    .legend-square {
      background-color: #28af5a;
    }
  }

  &.slow-color:not(.hidden) {
    .legend-square {
      background-color: #fed34c;
    }
  }

  &.stopped-color:not(.hidden) {
    .legend-square {
      background-color: #fc6c21;
    }
  }
`
