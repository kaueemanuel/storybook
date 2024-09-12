import React, { HTMLAttributes } from "react"

import { Container } from "./DatagridCardHeaderTitle.styles"

export interface DatagridCardHeaderTitleProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "title"> {
  title: string | React.ReactNode | JSX.Element
}

export const DatagridCardHeaderTitle: React.FC<
  DatagridCardHeaderTitleProps
> = ({ title, ...props }) => {
  return <Container {...props}>{title}</Container>
}
