import React, { ForwardRefExoticComponent, RefAttributes } from "react"

import {
  SwitchProps as SwitchPropsMUI,
  FormControlLabelProps,
} from "@mui/material"

import { FormControlLabel, Switch as SwitchStyled } from "./Switch.styles"

export interface SwitchProps extends Omit<SwitchPropsMUI, "value"> {
  label?: string
  value?: boolean
  controlLabelProps?: Omit<FormControlLabelProps, "label" | "control">
  "data-testid"?: string
}

export const Switch: ForwardRefExoticComponent<
  Omit<SwitchProps, "ref"> & RefAttributes<HTMLButtonElement>
> = React.forwardRef(
  (
    {
      label,
      checked,
      defaultValue,
      defaultChecked,
      controlLabelProps,
      value = undefined,
      "data-testid": dataTestid = "switch",
      ...props
    },
    ref
  ) => {
    return (
      <FormControlLabel
        sx={{ paddingLeft: "3px", fontSize: "14px" }}
        control={
          <SwitchStyled
            disableRipple
            sx={{ m: 1 }}
            size="medium"
            value={value}
            defaultValue={defaultValue}
            checked={checked !== undefined ? checked : value}
            defaultChecked={
              defaultChecked !== undefined ? defaultChecked : !!defaultValue
            }
            {...props}
            ref={ref}
            data-testid={dataTestid}
          />
        }
        label={label || ""}
        {...controlLabelProps}
      />
    )
  }
)
