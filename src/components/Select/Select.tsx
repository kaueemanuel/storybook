import React, { ForwardRefExoticComponent, RefAttributes } from "react"
import { Control, Controller } from "react-hook-form"

import { InputLabelProps, SelectProps as MUISelectProps } from "@mui/material"

import { InputHelperText } from "../InputHelperText/InputHelperText"
import { InputLabel } from "../InputLabel/InputLabel"
import { Select as SelectStyled } from "./Select.styles"

export interface SelectProps extends MUISelectProps {
  label?: string
  htmlFor?: string
  "data-testid"?: string
  InputLabelProps?: InputLabelProps
  helperText?: string
  name?: string
  control?: Control<any>
}

export const Select: ForwardRefExoticComponent<
  Omit<SelectProps, "ref"> & RefAttributes<HTMLDivElement>
> = React.forwardRef(
  (
    {
      required = false,
      variant = "outlined",
      label,
      htmlFor,
      size = "small",
      InputLabelProps,
      "data-testid": dataTestid = "select",
      helperText,
      control,
      name,
      ...props
    },
    ref
  ) => {
    if (InputLabelProps?.style) {
      InputLabelProps.sx = InputLabelProps.style
    }

    const Content = ({ onChange, value }) => (
      <SelectStyled
        {...props}
        data-testid={dataTestid}
        variant={variant}
        size={size}
        ref={ref}
        value={value ? value : null}
        onChange={onChange}
      />
    )

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
        {control && name ? (
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
              <Content onChange={onChange} value={value} />
            )}
          />
        ) : (
          <Content value={props?.value} onChange={props?.onChange} />
        )}
        {helperText && (
          <InputHelperText
            text={helperText}
            disabled={props.disabled}
            error={props.error}
          />
        )}
      </div>
    )
  }
)
