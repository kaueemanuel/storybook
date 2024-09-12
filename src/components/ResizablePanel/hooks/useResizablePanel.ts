import {
  getIntersectingRectangle,
  getPanelElement,
  getPanelElementsForGroup,
  getPanelGroupElement,
  getResizeHandleElement,
  getResizeHandleElementIndex,
  getResizeHandleElementsForGroup,
  getResizeHandlePanelIds,
} from "react-resizable-panels"

export const useResizablePanel = () => {
  return {
    getIntersectingRectangle,
    getPanelElement,
    getPanelElementsForGroup,
    getPanelGroupElement,
    getResizeHandleElement,
    getResizeHandleElementIndex,
    getResizeHandleElementsForGroup,
    getResizeHandlePanelIds,
  }
}
