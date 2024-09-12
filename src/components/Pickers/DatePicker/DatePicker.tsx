import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

import dayjs, { Dayjs } from "dayjs"

import {
  InputLabelProps,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material"
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers"

import { InputLabel } from "../../InputLabel/InputLabel"

type MUIDatePickerProps = typeof MUIDatePicker

export interface DatePickerProps
  extends Omit<MUIDatePickerProps, "value" | "onChange"> {
  label?: string
  htmlFor?: string
  InputLabelProps?: InputLabelProps
  variant?: TextFieldVariants
  size?: "small" | "medium"
  value?: string
  onChange?: (newValue: string) => void | Dispatch<SetStateAction<string>>
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
  error?: boolean
  helperText?: string
  fullWidth?: boolean
  required?: boolean
  TextFieldProps?: TextFieldProps
  "data-testid"?: string
  disabled?: boolean
}

export const DatePicker: React.FC<DatePickerProps> = ({
  variant = "outlined",
  label,
  htmlFor,
  size = "small",
  InputLabelProps,
  value,
  onChange,
  error = false,
  helperText = "",
  color = "primary",
  required = false,
  fullWidth,
  TextFieldProps,
  "data-testid": dataTestid = "date-picker",
  ...props
}) => {
  const [date, setDate] = useState<Dayjs | null>(value ? dayjs(value) : null)
  const handleOnChange = (newDate: Dayjs | null) => {
    setDate(newDate)
    if (onChange) {
      if (newDate) {
        onChange(newDate.format())
      } else {
        onChange("")
      }
    }
  }

  useEffect(() => {
    setDate(value ? dayjs(value) : null)
  }, [value])

  return (
    <div data-testid={dataTestid}>
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
      <MUIDatePicker
        {...props}
        slotProps={{
          textField: {
            variant,
            color,
            size,
            error,
            helperText,
            fullWidth,
            ...TextFieldProps,
          },
        }}
        value={date}
        onChange={handleOnChange}
      />
    </div>
  )
}
