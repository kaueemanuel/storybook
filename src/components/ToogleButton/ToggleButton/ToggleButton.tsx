import React from "react"

import {
  ToggleButton as ToggleButtonMUI,
  ToggleButtonProps as ToggleButtonPropsMUI,
  Tooltip,
  TooltipProps,
} from "@mui/material"

export interface ToggleButtonProps extends ToggleButtonPropsMUI {
  tooltip?: string
  tooltipPlacement?: TooltipProps["placement"]
  "data-testid"?: string
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  tooltip,
  tooltipPlacement = "top",
  ...props
}: ToggleButtonProps): React.ReactNode => {
  const content = (
    <ToggleButtonMUI
      {...props}
      data-testid={props?.["data-testid"] || "toggle-button"}
    />
  )

  return tooltip ? (
    <Tooltip title={tooltip} placement={tooltipPlacement}>
      {content}
    </Tooltip>
  ) : (
    content
  )
}
