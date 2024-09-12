import React from "react"

import { BoxProps } from "@mui/material"

import { htmlToComponent } from "../../functions/htmlToComponent"
import { BoxContainerStyled } from "./HtmlContainer.styles"

export const HtmlContainer = React.forwardRef(
  ({ children, ...props }: BoxProps, ref) => (
    <BoxContainerStyled {...props} ref={ref}>
      {htmlToComponent(children)}
    </BoxContainerStyled>
  ),
)
