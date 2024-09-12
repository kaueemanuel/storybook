import React from "react"
import {
  PanelResizeHandle,
  PanelResizeHandleProps as ResizablePanelResizeHandleProps,
} from "react-resizable-panels"

import { Icon } from "../../Icons/Icon"
import { DragButtonBox } from "./ResizablePanelDragHandle.styles"

export interface ResizablePanelDragHandleProps
  extends ResizablePanelResizeHandleProps {}

export const ResizablePanelDragHandle: React.FC<
  ResizablePanelDragHandleProps
> = ({
  children,
  ...props
}: ResizablePanelDragHandleProps): React.ReactNode => {
  const DragButton = (): React.ReactNode => (
    <DragButtonBox className="drag-button">
      <Icon name="drag_handle" fontSize="small" />
    </DragButtonBox>
  )

  return (
    <PanelResizeHandle {...props}>
      {children ?? <DragButton />}
    </PanelResizeHandle>
  )
}
