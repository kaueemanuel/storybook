import styled from "@emotion/styled"

import { theme } from "../../themes"

interface ContainerProps {
  loading?: boolean
}

export const Container = styled("div", {
  shouldForwardProp: (propName: string) => !["loading"].includes(propName),
})<ContainerProps>`
  display: flex;
  position: relative;
  justify-content: space-between;

  .chart {
    flex: 1;
    display: flex;
    flex-direction: column;
    video {
      right: 24px;
      top: 36px;
      position: absolute;
      pointer-events: none;
    }
  }

  .legends {
    flex: 1;
    display: flex;
    margin-top: 16px;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }
  .echarts-for-react {
    top: 0;
    right: 0;
    position: absolute;
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

interface LegendProps {
  onClick?: () => void
  color: React.CSSProperties["backgroundColor"]
}

export const Legend = styled("div", {
  shouldForwardProp: (propName: string) => !["color"].includes(propName),
})<LegendProps>`
  padding: 8px;
  .legend-box {
    display: flex;
    align-items: baseline;
    .legend-dot {
      font-size: 16px;
      margin-right: 8px;
      color: ${({ color }) => color};
    }
    .legend-text {
      display: flex;
      flex-direction: column;
    }
  }
  .legend-time-box {
    display: flex;
    padding-left: 18px;
    align-items: center;
    .MuiTypography-root {
      font-weight: bold;
    }
    .legend-count {
      min-width: 45px;
    }
    .legend-hours {
      margin-left: 10px;
    }
  }
`
