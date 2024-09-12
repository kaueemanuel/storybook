import React from "react"
import { PanelProps as ResizablePanelProps } from "react-resizable-panels"

import { PanelStyled } from "./ResizablePanelContent.styles"

export interface ResizablePanelContentProps extends ResizablePanelProps {}

export const ResizablePanelContent: React.FC<ResizablePanelContentProps> = ({
  className,
  ...props
}: ResizablePanelContentProps): React.ReactNode => (
  <PanelStyled {...props} className={`resizable-panel-content ${className}`} />
)
