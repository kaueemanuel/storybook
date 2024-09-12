import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

import dayjs, { Dayjs } from "dayjs"

import {
  InputLabelProps,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material"
import { TimePicker as MUITimePicker } from "@mui/x-date-pickers"

import { InputLabel } from "../../InputLabel/InputLabel"

type MUITimePickerProps = typeof MUITimePicker

export interface TimePickerProps
  extends Omit<MUITimePickerProps, "value" | "onChange"> {
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

export const TimePicker: React.FC<TimePickerProps> = ({
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
  fullWidth,
  TextFieldProps,
  required = false,
  "data-testid": dataTestid = "time-picker",
  ...props
}) => {
  const [time, setTime] = useState<Dayjs | null>(value ? dayjs(value) : null)
  const handleOnChange = (newDate: Dayjs | null) => {
    setTime(newDate)
    if (onChange) {
      if (newDate) {
        onChange(newDate.format())
      } else {
        onChange("")
      }
    }
  }

  useEffect(() => {
    setTime(value ? dayjs(value) : null)
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
      <MUITimePicker
        {...props}
        slotProps={{
          textField: {
            variant,
            color,
            size,
            error,
            helperText,
            fullWidth,
            required,
            ...TextFieldProps,
          },
        }}
        value={time}
        onChange={handleOnChange}
      />
    </div>
  )
}
