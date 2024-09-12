import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

import { debounce } from "lodash"

import { TextField, TextFieldProps } from "../../components/TextField/TextField"
import { theme } from "../../themes"
import { IconButton } from "../IconButton/IconButton"

export interface InputSearchProps extends TextFieldProps {
  withDebounce?: boolean
  debounceMilliseconds?: number
  "data-testid"?: string
}

export const InputSearch: React.FC<InputSearchProps> = ({
  label,
  value,
  placeholder,
  onChange = () => {},
  withDebounce = true,
  debounceMilliseconds = 500,
  "data-testid": dataTestid = "input-search",
  required = true,
  ...props
}) => {
  const { t } = useTranslation()
  const debouncedChange = useMemo(() => {
    return debounce(onChange, debounceMilliseconds)
  }, [])
  const [internalValue, setInternalValue] = useState(value)

  const handleOnChange = (event) => {
    event.preventDefault()
    setInternalValue(event.target.value)
    if (withDebounce) {
      debouncedChange(event)
    } else {
      onChange(event)
    }
  }

  const handleClearSearch = (event) => {
    event.preventDefault()
    event.target.value = ""
    setInternalValue(event.target.value)
    onChange(event)
  }

  const Icon = useCallback(() => {
    if (internalValue) {
      return (
        <IconButton
          icon="close"
          onClick={handleClearSearch}
          iconProps={{ style: { color: theme.palette.icon.secondary } }}
          style={{ padding: "unset", marginLeft: "12px" }}
        />
      )
    }
    return (
      <IconButton
        icon="search"
        iconProps={{ style: { color: theme.palette.icon.secondary } }}
        style={{ padding: "unset", marginRight: "12px" }}
      />
    )
  }, [internalValue])

  useEffect(() => {
    return () => {
      debouncedChange.cancel()
    }
  }, [])

  return (
    <TextField
      {...props}
      required={required}
      data-testid={dataTestid}
      label={label || label === "" ? label : t("inputSearch.label")}
      placeholder={
        placeholder || placeholder === ""
          ? placeholder
          : t("inputSearch.placeholder")
      }
      multiline={false}
      InputProps={{
        startAdornment: !internalValue ? <Icon /> : "",
        endAdornment: internalValue ? <Icon /> : "",
        style: {
          padding: "4px 12px 4px 8px",
        },
        sx: {
          input: {
            paddingRight: "unset",
            paddingLeft: "unset",
          },
          "input::placeholder": {
            color: `${theme.palette.text.placeholderInput} !important`,
          },
        },
      }}
      value={internalValue}
      defaultValue={value}
      onChange={handleOnChange}
    />
  )
}
