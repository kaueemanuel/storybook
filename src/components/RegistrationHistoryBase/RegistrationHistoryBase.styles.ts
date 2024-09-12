import { Badge } from "@mui/material"

import styled from "../../../lib/ui/emotion/emotion-styled"
import theme from "../../themes/theme"
import { IconButton, IconButtonProps } from "../IconButton/IconButton"

interface IconButtonStyledProps extends IconButtonProps {
  isExpanded: boolean
}

export const BadgeStyled = styled(Badge)`
  .MuiBadge-badge {
    min-width: 16px;
    height: 16px;
    font-size: 11px;
    font-weight: 500;
    color: ${theme.palette.text.inverse};
    background-color: ${theme.palette.error.main};
  }
`

export const IconButtonStyled = styled(IconButton, {
  shouldForwardProp: (propName: string) => !["isExpanded"].includes(propName),
})<IconButtonStyledProps>`
  transform: ${({ isExpanded }) =>
    isExpanded ? "rotate(90deg)" : "rotate(0deg)"};
`
