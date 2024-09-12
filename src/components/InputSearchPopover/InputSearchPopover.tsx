import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { JSX } from "react/jsx-runtime"

import { debounce } from "lodash"

import { Autocomplete, AutocompleteProps, InputAdornment } from "@mui/material"

import { theme } from "../../themes"
import { IconButton } from "../IconButton/IconButton"
import { Icon } from "../Icons/Icon"
import { CircularProgress } from "../Loadings/CircularProgress/CircularProgress"
import { TextField } from "../TextField/TextField"
import {
  CustomListItem,
  CustomListItemText,
  PopperContainer,
} from "./InputSearchPopover.styles"

export type InputSearchPopoverDataType = {
  label: string
  value: string
}

export interface InputSearchPopoverProps<
  TDataType extends InputSearchPopoverDataType | undefined = undefined
> extends Omit<
    AutocompleteProps<any, false, true, true>,
    "options" | "renderInput" | "loading"
  > {
  debounceMilliseconds?: number
  "data-testid"?: string
  onItemSelect?: (selected: TDataType) => void
  onSearch: (query: string | undefined) => Promise<any[] | undefined>
  loadingText?: string
  placeholder?: string
  label?: string
  minSearchLength?: number
}

export function InputSearchPopover<
  TDataType extends InputSearchPopoverDataType | undefined = undefined
>({
  debounceMilliseconds = 500,
  "data-testid": dataTestid = "input-search-popover",
  onItemSelect,
  onSearch,
  loadingText,
  placeholder,
  noOptionsText,
  minSearchLength = 1,
  label,
  ...props
}: InputSearchPopoverProps<TDataType>) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<readonly TDataType[]>([])
  const [loading, setLoading] = useState(false)
  const internalValueRef = useRef("")
  const { t } = useTranslation()

  const debouncedFetchOptions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (query.length < minSearchLength) {
          internalValueRef.current = query
          setOpen(false)
          setOptions([])
          return
        }

        if (query !== internalValueRef.current) {
          setLoading(true)
          internalValueRef.current = query
          const data = await onSearch(query)
          setOpen(true)
          setOptions(data ?? [])
          setLoading(false)
        }
      }, debounceMilliseconds),
    [debounceMilliseconds]
  )

  const handleInputChange = useCallback(
    (_: any, newInputValue: string) => {
      debouncedFetchOptions(newInputValue)
    },
    [debouncedFetchOptions]
  )

  const IconAdornament = useCallback(() => {
    let element: JSX.Element

    if (loading) {
      element = <CircularProgress color="inherit" size={20} />
    } else {
      element = (
        <IconButton
          icon="search"
          style={{ color: theme.palette.text.primary }}
        />
      )
    }

    return (
      <InputAdornment position="end" sx={{ paddingRight: "4px" }}>
        {element}
      </InputAdornment>
    )
  }, [loading])

  const onSelectOption = (selected: TDataType) => {
    setOpen(false)
    internalValueRef.current = selected!.label
    onItemSelect!(selected)
  }

  const EmptyContainer = useCallback(
    (containerProps: any) => (
      <PopperContainer {...containerProps}>
        <CustomListItem>
          <CustomListItemText>
            {noOptionsText
              ? noOptionsText
              : t("inputSearchPopover.noOptionsText")}
          </CustomListItemText>
        </CustomListItem>
      </PopperContainer>
    ),
    [noOptionsText]
  )

  const handlePreventEnterKeyDown = useCallback((event: any) => {
    if (event.key === "Enter") {
      event.stopPropagation()
    }
  }, [])

  useEffect(() => {
    return () => {
      debouncedFetchOptions.cancel()
    }
  }, [])

  return (
    <Autocomplete
      freeSolo
      loading={loading}
      getOptionLabel={(option: any) => option.label}
      onChange={(_, value) => onSelectOption(value as TDataType)}
      onClose={() => {
        setOpen(false)
      }}
      filterOptions={(options) => options}
      aria-haspopup={false}
      onInputChange={handleInputChange}
      disableClearable
      loadingText={
        loadingText ? loadingText : t("inputSearchPopover.loadingText")
      }
      {...props}
      open={open}
      options={options}
      renderInput={(params) => (
        <TextField
          sx={{ color: `${theme.palette.text.primary}80` }}
          data-testid={dataTestid}
          {...params}
          label={label}
          placeholder={
            placeholder ? placeholder : t("inputSearchPopover.placeholder")
          }
          InputProps={{
            ...params.InputProps,
            onKeyDown: handlePreventEnterKeyDown,
            endAdornment: <IconAdornament />,
          }}
        />
      )}
      PopperComponent={options.length === 0 ? EmptyContainer : PopperContainer}
      onFocus={() => {
        if (options.length > 0) {
          setOpen(true)
        }
      }}
      openOnFocus={false}
      selectOnFocus={false}
      renderOption={(props, option: any) => (
        <CustomListItem {...props} key={option.label}>
          <CustomListItemText>
            {option.label}
            <Icon name="link" />
          </CustomListItemText>
        </CustomListItem>
      )}
    />
  )
}
