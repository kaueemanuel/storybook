/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Controller, Control } from "react-hook-form"
import ReactInputMask from "react-input-mask/dist/react-input-mask"

import { TextField, TextFieldProps } from "../TextField/TextField"

export interface InputMaskSelection {
  start: number
  end: number
}

export interface InputMaskInputState {
  value: string
  selection: InputMaskSelection | null
}

export interface InputMaskMaskOptions {
  mask: string
  maskChar: string
  alwaysShowMask: boolean
  formatChars: Record<string, string>
  permanents: number[]
}

export interface InputMaskProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  textFieldProps?: TextFieldProps
  "data-testid"?: string
  name?: string
  control?: Control<any>
  label?: string
  helperText?: string
  error?: boolean
  required?: boolean
  color?: TextFieldProps["color"]
  mask: string
  maskChar?: string | null
  formatChars?: { [key: string]: string }
  alwaysShowMask?: boolean
  inputRef?: React.Ref<HTMLInputElement>
  beforeMaskedValueChange?(
    newState: InputMaskInputState,
    oldState: InputMaskInputState,
    userInput: string,
    maskOptions: InputMaskMaskOptions
  ): InputMaskInputState
}

export const InputMask: React.FC<InputMaskProps> = ({
  mask,
  maskChar = "",
  value,
  placeholder,
  textFieldProps = {},
  onChange = () => {},
  "data-testid": dataTestid = "input-mask",
  name,
  control,
  label,
  helperText,
  error,
  color,
  required,
  ...props
}) => {
  const textFieldPropsAux = {
    placeholder: placeholder,
    label: label,
    error: error,
    helperText: helperText,
    required: required,
    ...textFieldProps,
    multiline: false,
  }

  const textField = () => (
    <TextField color={color} {...textFieldPropsAux} autoFocus={false} />
  )

  return control && name ? (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <ReactInputMask
          {...props}
          data-testid={dataTestid}
          mask={mask}
          maskChar={maskChar}
          onChange={onChange}
          value={value ?? ""}
          autoFocus={false}
        >
          {textField}
        </ReactInputMask>
      )}
    />
  ) : (
    <ReactInputMask
      {...props}
      data-testid={dataTestid}
      mask={mask}
      maskChar={maskChar}
      onChange={onChange}
      value={value ?? ""}
      autoFocus={false}
    >
      {textField}
    </ReactInputMask>
  )
}
