/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { Controller } from "react-hook-form"
import { useTranslation } from "react-i18next"

import { Icon } from "../../../lib/ui/icons"
import { Box } from "../../../lib/ui/material/material"
import { theme } from "../../themes"
import { AutocompleteFieldProps } from "../AutocompleteField/AutocompleteField"
import { Button } from "../Button/Button"
import { IconNameType } from "../Icons/IconNameType"
import { InputHelperText } from "../InputHelperText/InputHelperText"
import { TextField } from "../TextField/TextField"
import { AutocompleteWithIconField as AutocompleteWithIconFieldStyled } from "./AutocompleteWithIconField.styles"

import styles from "./styles.module.css"

export interface AutocompleteWithIconFieldProps extends AutocompleteFieldProps {
  options: readonly AutocompleteWithIconFieldOptionProps[]
  value?: AutocompleteWithIconFieldOptionProps
}

export interface AutocompleteWithIconFieldOptionProps {
  label: string
  value: string
  iconName: IconNameType
  iconColor: string
}

export const AutocompleteWithIconField = (
  props: AutocompleteWithIconFieldProps,
) => {
  const {
    label,
    required,
    disabled,
    control,
    name,
    onChange,
    helperText,
    error,
    value,
    placeholder,
  } = props

  const [iconName, setIconName] = useState("" as IconNameType)
  const [iconColor, setIconColor] = useState("")

  const AutocompleteWithIconFieldComponent = ({
    onChange,
    value,
  }: {
    onChange: (value: AutocompleteWithIconFieldOptionProps) => void
    value?: AutocompleteWithIconFieldOptionProps
  }) => {
    useEffect(() => {
      if (value) {
        setIconName(value.iconName)
        setIconColor(value.iconColor)
      }
    }, [value])

    const { t } = useTranslation()

    return (
      <AutocompleteWithIconFieldStyled
        classes={{ listbox: styles.listbox }}
        value={value}
        onChange={(_, value: any) => {
          onChange(value)
        }}
        isOptionEqualToValue={(option, value) => {
          const op = option as AutocompleteWithIconFieldOptionProps
          const val = value as AutocompleteWithIconFieldOptionProps

          return op.value === val.value
        }}
        noOptionsText={t("common_label_noOptions")}
        closeText={t("common_label_close")}
        clearText={t("common_label_clear")}
        openText={t("common_label_open")}
        renderInput={(params) => {
          if (value?.value) {
            params.InputProps.startAdornment = (
              <Icon
                style={{ marginLeft: "8px", color: iconColor }}
                name={iconName}
              />
            )
          } else params.InputProps.startAdornment = undefined

          return (
            <TextField
              error={error}
              label={label}
              required={required}
              placeholder={placeholder}
              {...params}
            />
          )
        }}
        renderOption={(_, option) => {
          const op = option as AutocompleteWithIconFieldOptionProps

          return (
            <Box key={op.label}>
              <Button
                fullWidth
                startIcon={
                  <Icon name={op.iconName} style={{ color: op.iconColor }} />
                }
                onClick={() => {
                  setIconName(op.iconName)
                  setIconColor(op.iconColor)
                  onChange(op)
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "initial",
                  padding: "0 16px 0 16px",
                  color: theme.palette.text.primary,
                }}
              >
                {op.label}
              </Button>
            </Box>
          )
        }}
        {...props}
      />
    )
  }

  const handleOnChange = (val: any) => {
    if (onChange) {
      onChange(val)
    }
  }

  return (
    <>
      {control && name ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <AutocompleteWithIconFieldComponent
              onChange={onChange}
              value={value}
            />
          )}
        />
      ) : (
        <AutocompleteWithIconFieldComponent
          value={value}
          onChange={handleOnChange}
        />
      )}
      {helperText && (
        <InputHelperText disabled={disabled} error={error} text={helperText} />
      )}
    </>
  )
}
