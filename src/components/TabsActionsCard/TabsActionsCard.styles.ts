import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { theme } from "../../themes"
import { Card } from "../Card/Card"

interface CardProps {
  iconColor?: string
  loading: boolean
}

export const CardContainer = styled(Card, {
  shouldForwardProp: (propName: string) =>
    !["loading", "iconColor"].includes(propName),
})<CardProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;
  min-height: 95px;
  border: none;
  background-color: #f5f7fa;
  position: relative;

  .card-header,
  .card-content {
    padding: 0;
  }

  .card-header {
    align-items: normal;
    .MuiCardHeader-avatar {
      margin-right: 10px;
      > svg {
        width: 24px;
        height: 24px;
        color: ${({ iconColor }) => iconColor};
      }
    }
  }

  .loading {
    top: 0;
    left: 0;
    pointer-events: none;
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
    background-color: #f5f7fa;
  }

  ${({ disabled }: any) =>
    disabled &&
    css`
      pointer-events: none;
      background-color: ${theme.palette.surface.surface3};
      * {
        color: ${theme.palette.icon.info} !important;
      }
    `}
`
