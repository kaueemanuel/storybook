import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { alpha } from "@mui/material"

import { theme } from "../../themes"

export const Container = styled.div`
  .backdrop {
    position: fixed;
    z-index: 1499;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
  }
  .MuiTooltip-popper {
    width: 100%;
    max-width: 484px;
    min-width: 328px;

    .MuiTooltip-tooltip {
      width: 100%;
      max-width: 484px;
      min-width: 328px;
      background-color: ${theme.palette.surface.surface1};
      border-radius: 10px;
      box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);

      .popper-container {
        padding: 24px;
        padding-bottom: 48px;
        width: 100%;
        max-width: 484px;
        min-width: 328px;

        .icons-container {
          position: relative;
          max-height: 400px;
          padding-top: 20px;
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;

          .ReactVirtualized__Collection {
            max-height: 390px;
            height: unset !important;

            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background: transparent;
            }

            ::-webkit-scrollbar-thumb {
              background: ${theme.palette.icon.action};
              cursor: pointer;
              border-radius: 3px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background: ${alpha(theme.palette.icon.action, 0.8)};
            }
          }

          .loading-box {
            height: 300px;
            width: 412px;
          }
          .icon-search-empty {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 300px;
            width: 412px;
          }
        }

        .search-input {
          > div {
            padding-left: 16px;
            span {
              color: rgba(0, 0, 0, 0.6) !important;
            }
            input {
              padding-left: 16px;
              padding-right: 16px;
            }
          }
        }
      }
    }
  }
`

interface InputProps {
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning"
  size: "small" | "medium"
  open: boolean
  error: boolean
  fullWidth: boolean
  disabled: boolean
}

export const Input = styled.div<InputProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  height: ${({ size }) => (size === "medium" ? "53.13px" : "40px")};
  padding: ${({ size }) => (size === "medium" ? "16.5px 14px" : "8.5px 14px")};
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "177px")};
  border: 1px solid;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.248px;
  border-color: ${alpha(theme.palette.text.placeholder, 0.35)};
  position: relative;
  cursor: pointer;

  &:hover {
    border-color: ${theme.palette.text.placeholder};
  }

  .placeholder {
    color: ${alpha(theme.palette.text.primary, 0.5)};
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${theme.palette["error"].main};
      &:hover {
        border-color: ${theme.palette.text.placeholder};
      }
    `}

  ${({ open, color, error }) =>
    open &&
    css`
      box-shadow: inset 0px 0px 0px 1px
        ${theme.palette[error ? "error" : color].main};
      border-color: ${theme.palette[error ? "error" : color].main};
      &:hover {
        box-shadow: inset 0px 0px 0px 1px
          ${theme.palette[error ? "error" : color].main};
        border-color: ${theme.palette[error ? "error" : color].main};
      }
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
      background-color: rgba(74, 74, 74, 0.28);
    `}

    &:active .remove-button,
    &:focus-visible .remove-button,
    &:focus .remove-button,
    &:hover .remove-button {
    display: inherit;
  }

  .remove-button {
    margin-right: -8px;
    display: inherit;
  }
`
