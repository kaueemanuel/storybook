import { HTMLAttributes } from "react"

import { Container } from "./DatagridCardHeader.styles"

export interface DatagridCardHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  "data-testid"?: string
}

export const DatagridCardHeader: React.FC<DatagridCardHeaderProps> = ({
  children,
  "data-testid": dataTestid = "datagrid-card-header",
  ...props
}) => {
  return (
    <Container {...props} data-testid={dataTestid}>
      {children}
    </Container>
  )
}
