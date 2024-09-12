import { css } from "@emotion/react"
import styled from "@emotion/styled"
import ChipMUI from "@mui/material/Chip"

import { theme } from "../../themes"


interface ChipProps {
  rounded?: boolean
  size?: "small" | "medium"
}

export const Chip = styled(ChipMUI)<ChipProps>`
  border-radius: ${({ rounded }) => (rounded ? "50%" : "4px")};
   ${props => props?.size === "small" ?
    css`
      font-size: 0.75 !important;
      height: auto !important;
    ` :
    css`
      height: 22px !important;
    `
  }
  ${props => props.variant === "filled" && props?.color && props.color !== "default" &&
    css`
      background-color: ${theme.palette[props.color].light}
    `
  }
  ${props => props.variant === "outlined" && props?.color && props.color !== "default" &&
    css`
      background-color: none;
      border-color: ${theme.palette[props.color].light};
      color: ${theme.palette[props.color].light};
    `
  }
`
