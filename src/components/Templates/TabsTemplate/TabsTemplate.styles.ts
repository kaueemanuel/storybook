import styled from "@emotion/styled"

interface ContainerProps {
  height?: string
  bgColor?: string
  negativeNavHeight?: string
}

export const Container = styled("div", {
  shouldForwardProp: (propName: string) =>
    !["height", "bgColor", "negativeNavHeight"].includes(propName),
})<ContainerProps>`
  width: 100%;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    transition: height 0.2s ease;
    height: ${({ height }) => !!height && height};
    width: calc(100vw - 40px);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background: ${({ bgColor }) =>
      bgColor ??
      "linear-gradient(90deg, #13283c 0%, #13283c 50%, #355371 100%)"};
  }

  .header-content {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .tab-content {
    display: flex;
    gap: 3;
    width: 100%;
    position: relative;
    > div {
      width: 100%;
    }

    > div > div:first-of-type {
      width: 100%;
      padding-top: ${({ height, negativeNavHeight }) =>
        `calc(${height} - 60px - ${negativeNavHeight})`};
      margin-left: 40px;
      width: calc(100% - 80px);
      transition: padding-top 0.2s ease;
      overflow-y: hidden;
    }

    div[role="tabpanel"] {
      height: ${({ height, negativeNavHeight }) =>
        `calc(100vh - ${height} - 40px + ${negativeNavHeight})`};
      overflow: auto;
      position: relative;
      width: 100%;
      transition: height 0.2s ease;

      > div {
        height: 100%;
      }
    }
  }
`
