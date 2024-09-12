import React from "react"
import {
  PanelGroup,
  PanelGroupProps as ResizablePanelGroupProps,
  ImperativePanelHandle as ImperativePanelResizableHandle,
  ImperativePanelGroupHandle as ImperativePanelResizableGroupHandle,
} from "react-resizable-panels"

import { PanelGroupBox } from "./ResizablePanel.styles"

export type ImperativePanelHandle = ImperativePanelResizableHandle
export type ImperativePanelGroupHandle = ImperativePanelResizableGroupHandle

export interface ResizablePanelProps extends ResizablePanelGroupProps {}

export const ResizablePanel: React.FC<ResizablePanelProps> = ({
  direction,
  ...props
}: ResizablePanelProps): React.ReactNode => (
  <PanelGroupBox direction={direction}>
    <PanelGroup
      direction={direction}
      {...props}
      className="resizable-panel-group"
    />
  </PanelGroupBox>
)
