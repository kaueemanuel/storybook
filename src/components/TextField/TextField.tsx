import React, { ForwardRefExoticComponent, RefAttributes } from "react"

import {
  TextFieldProps as MUITextFieldProps,
  TextFieldVariants,
} from "@mui/material"

import { InputLabel } from "../../components/InputLabel/InputLabel"
import { TextFieldStyled } from "./TextField.styles"

export interface TextFieldProps extends Omit<MUITextFieldProps, "variant"> {
  label?: string
  htmlFor?: string
  variant?: TextFieldVariants
  "data-testid"?: string
}

export const TextField: ForwardRefExoticComponent<
  Omit<TextFieldProps, "ref"> & RefAttributes<HTMLDivElement>
> = React.forwardRef(
  (
    {
      required = false,
      variant = "outlined",
      color = "primary",
      label,
      htmlFor,
      size = "small",
      InputLabelProps,
      "data-testid": dataTestid = "textfield",
      ...props
    },
    ref,
  ) => {
    if (InputLabelProps?.style) {
      InputLabelProps.sx = InputLabelProps.style
    }

    return (
      <div>
        {label && (
          <InputLabel
            htmlFor={htmlFor}
            {...InputLabelProps}
            required={required}
            disabled={props.disabled}
          >
            {label}
          </InputLabel>
        )}
        <TextFieldStyled
          {...props}
          color={color}
          data-testid={dataTestid}
          variant={variant}
          size={size}
          ref={ref}
        />
      </div>
    )
  },
)
