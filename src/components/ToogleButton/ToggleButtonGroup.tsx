import React from "react"

import {
  ToggleButtonGroup as ToggleButtonGroupMUI,
  ToggleButtonGroupProps as ToggleButtonGroupPropsMUI,
} from "@mui/material"

export interface ToggleButtonGroupProps extends ToggleButtonGroupPropsMUI {
  "data-testid"?: string
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  children,
  "data-testid": dataTestid = "toggle-button-group",
  ...props
}) => {
  return (
    <ToggleButtonGroupMUI {...props} data-testid={dataTestid}>
      {children}
    </ToggleButtonGroupMUI>
  )
}
