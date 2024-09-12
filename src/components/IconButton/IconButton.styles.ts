import { css } from "@emotion/react"
import styled from "@emotion/styled"
import ButtonMUI, { ButtonProps } from "@mui/material/Button"

import { theme } from "../../themes"

interface IconButtonProps {
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
}

export const IconButton = styled(ButtonMUI)<IconButtonProps>`
  padding: 6.25px;
  min-width: auto;
  border-radius: 50%;
  ${({ color }) =>
    color === "inherit" &&
    css`
      color: ${theme.palette.icon.action};
    `}
  ${({ color, variant }) =>
    color === "inherit" &&
    variant === "contained" &&
    css`
      background-color: ${theme.palette.icon.action};
      color: ${theme.palette.text.inverse};

      &:hover {
        background-color: ${theme.palette.system["blue-600"]};
      }
    `}
  ${({ color, variant }) =>
    color === "inherit" &&
    variant === "outlined" &&
    css`
      border-color: ${theme.palette.icon.action};
    `}
`

export const IconButtonSquared = styled(ButtonMUI)`
  padding: 6.25px;
  min-width: auto;
  ${({ color }) =>
    color === "inherit" &&
    css`
      color: ${theme.palette.icon.action};
    `}
  ${({ color, variant }) =>
    color === "inherit" &&
    variant === "contained" &&
    css`
      background-color: ${theme.palette.icon.action};
      color: ${theme.palette.text.inverse};

      &:hover {
        background-color: ${theme.palette.system["blue-600"]};
      }
    `}
  ${({ color, variant }) =>
    color === "inherit" &&
    variant === "outlined" &&
    css`
      border-color: ${theme.palette.icon.action};
    `}
`
