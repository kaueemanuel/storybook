import styled from "@emotion/styled"

import { theme } from "../../themes"

interface ContainerProps {
  loading: boolean
}

export const Container = styled("div", {
  shouldForwardProp: (propName: string) => !["loading"].includes(propName),
})<ContainerProps>`
  --swiper-theme-color: ${theme.palette.primary.main};

  position: relative;
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.palette.background.default};
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
