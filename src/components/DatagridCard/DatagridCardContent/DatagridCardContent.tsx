import { HTMLAttributes } from "react"

import { Container } from "./DatagridCardContent.styles"

export interface DatagridCardContentProps
  extends HTMLAttributes<HTMLDivElement> {
  "data-testid"?: string
}

export const DatagridCardContent: React.FC<DatagridCardContentProps> = ({
  children,
  "data-testid": dataTestid = "datagrid-card-content",
  ...props
}) => {
  return (
    <Container {...props} data-testid={dataTestid}>
      {children}
    </Container>
  )
}
