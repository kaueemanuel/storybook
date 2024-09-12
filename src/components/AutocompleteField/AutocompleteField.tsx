import { useMemo } from "react"
import { Control, Controller } from "react-hook-form"

import {
  Autocomplete,
  AutocompleteRenderInputParams,
  AutocompleteProps,
} from "@mui/material"

import { InputLabel } from "../../components/InputLabel/InputLabel"
import { InputHelperText } from "../InputHelperText/InputHelperText"
import { TextField } from "../TextField/TextField"
import { AutocompleteField as AutocompleteFieldStyled } from "./AutocompleteField.styles"

type AutocompleteFieldStyled = ReturnType<typeof Autocomplete>

export interface AutocompleteFieldProps
  extends Omit<
    AutocompleteProps<unknown, boolean, boolean, boolean, React.ElementType>,
    "renderInput"
  > {
  label?: string
  htmlFor?: string
  required?: boolean
  options: readonly unknown[]
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode
  "data-testid"?: string
  placeholder?: string
  helperText?: string
  error?: boolean
  onChange?: (value: any) => void
  getOptionLabel?: (options: any) => string
  name?: string
  control?: Control<any>
}

export const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
  label,
  htmlFor,
  required = false,
  "data-testid": dataTestid = "autocomplete-field",
  placeholder = "",
  helperText = "",
  error = false,
  renderInput,
  value,
  options,
  onChange,
  name,
  control,
  color,
  ...props
}) => {
  const renderInputContent = useMemo(() => {
    if (!renderInput) {
      return (params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          size="small"
          error={error}
          color={color}
        />
      )
    }
    return renderInput
  }, [renderInput, options, value])

  const Content = ({ onChange, value }) => (
    <AutocompleteFieldStyled
      {...props}
      color={color}
      error={error}
      data-testid={dataTestid}
      options={options}
      value={options.length > 0 && value ? value : null}
      renderInput={renderInputContent}
      onChange={(_, value: any) => onChange(value)}
    />
  )

  const handleOnChange = (val: any) => {
    if (onChange) {
      onChange(val)
    }
  }

  return (
    <>
      {label && (
        <InputLabel
          shrink
          htmlFor={htmlFor}
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
        <Content value={value} onChange={handleOnChange} />
      )}
      {helperText && (
        <InputHelperText
          disabled={props.disabled}
          error={error}
          text={helperText}
        />
      )}
    </>
  )
}
