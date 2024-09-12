/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  CSSProperties,
  useRef,
  useState,
  useMemo,
  lazy,
  Suspense,
  useEffect,
} from "react"
import { Control, Controller } from "react-hook-form"
import { useTranslation } from "react-i18next"

import { Box, Fade, Tooltip, TooltipProps } from "@mui/material"

import { theme } from "../../themes"
import { IconButton } from "../IconButton/IconButton"
import { allIconsNames } from "../Icons/consts"
import { Icon } from "../Icons/Icon"
import { IconNameType } from "../Icons/IconNameType"
import { InputHelperText } from "../InputHelperText/InputHelperText"
import { InputLabel } from "../InputLabel/InputLabel"
import { CircularProgress } from "../Loadings/CircularProgress/CircularProgress"
import { LoadingBrand } from "../Loadings/LoadingBrand/LoadingBrand"
import { PopperContent } from "../Popper/PopperContent/PopperContent"
import { TextField } from "../TextField/TextField"
import { Container, Input } from "./InputIconSearch.styles"
import { InputIconSearchEmpty } from "./InputIconSearchEmpty/InputIconSearchEmpty"

const IconBox = lazy(() => import("./IconBox/IconBox"))

export interface InputIconSearchProps {
  "data-testid"?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  loading?: boolean
  error?: boolean
  helperText?: string
  onChange?: (value?: IconNameType | "") => void
  tooltipProps?: TooltipProps
  defaultValue?: IconNameType | ""
  value?: IconNameType | ""
  htmlFor?: string
  style?: CSSProperties
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
  size?: "small" | "medium"
  fullWidth?: boolean
  name?: string
  control?: Control<any>
}

export const InputIconSearch: React.FC<InputIconSearchProps> = ({
  "data-testid": dataTestid = "input-icon-search",
  value,
  defaultValue,
  placeholder,
  label,
  htmlFor,
  disabled = false,
  required = false,
  loading = false,
  style,
  color = "primary",
  size = "small",
  error = false,
  fullWidth = false,
  helperText = "",
  onChange,
  tooltipProps,
  control,
  name,
}) => {
  const { t } = useTranslation()
  const inputRef = useRef(null)
  const containerRef = useRef<any>(null)
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<IconNameType | "">(
    value ?? defaultValue ?? "",
  )
  let internalControllerOnChange: any = () => {}

  const [search, setSearch] = useState("")

  const formattedSearch = search.toLocaleLowerCase().trim().replace(" ", "_")

  const filteredIcons = useMemo(
    () =>
      !formattedSearch || formattedSearch === ""
        ? allIconsNames
        : allIconsNames.filter((name) => name.includes(formattedSearch)),
    [formattedSearch],
  )

  const handleOnBlur = () => {
    setSearch("")
    setOpen(false)
  }

  const handleOnChange = (value: IconNameType | "") => {
    setInternalValue(value)
    if (onChange) {
      onChange(value)
    }
    if (internalControllerOnChange) {
      internalControllerOnChange({
        target: { value },
      })
    }
    handleOnBlur()
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef?.current &&
        !containerRef.current?.contains?.(event.target)
      ) {
        handleOnBlur()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [containerRef])

  return (
    <Container
      style={style}
      data-testid={dataTestid}
      id="input-icon-search"
      ref={containerRef}
    >
      {label && (
        <InputLabel
          shrink
          htmlFor={htmlFor}
          required={required}
          disabled={disabled}
        >
          {label}
        </InputLabel>
      )}
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        id="input-icon-search-tooltip"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        placement="bottom-end"
        open={open}
        title={
          <PopperContent className="popper-container">
            <TextField
              className="search-input"
              placeholder={t("common.search.placeholder")}
              fullWidth
              onChange={(event) => setSearch(event.target.value)}
              inputProps={{ maxlength: 45 }}
              InputProps={{
                startAdornment: <Icon name="search" />,
              }}
            />
            <div className="icons-container">
              <Suspense
                fallback={
                  <div className="loading-box">
                    <LoadingBrand />
                  </div>
                }
              >
                <IconBox
                  handleOnChange={handleOnChange}
                  filteredIcons={filteredIcons}
                  internalValue={internalValue}
                />
              </Suspense>
              {filteredIcons.length === 0 && (
                <div className="icon-search-empty">
                  <InputIconSearchEmpty />
                </div>
              )}
            </div>
          </PopperContent>
        }
        {...tooltipProps}
      >
        <Input
          ref={inputRef}
          size={size}
          color={color}
          open={open}
          error={error}
          fullWidth={fullWidth}
          disabled={disabled}
          onClick={() => setOpen(!open)}
        >
          {internalValue && !loading ? (
            <Icon
              name={internalValue}
              style={{ color: theme.palette.text.primary }}
            />
          ) : (
            <div className="placeholder">
              {placeholder ?? t("common.select.placeholder")}
            </div>
          )}
          {loading ? (
            <CircularProgress size={20} />
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap=""
            >
              {internalValue && (
                <IconButton
                  className="remove-button"
                  iconProps={{ style: { color: theme.palette.text.primary } }}
                  icon="close"
                  onClick={(event) => {
                    event.stopPropagation()
                    handleOnChange("")
                  }}
                />
              )}
              <IconButton
                style={{ marginRight: "-8px" }}
                iconProps={{ style: { color: theme.palette.text.primary } }}
                icon={open ? "arrow_drop_up" : "arrow_drop_down"}
                onClick={() => setOpen(!open)}
              />
            </Box>
          )}
        </Input>
      </Tooltip>
      {helperText && (
        <InputHelperText disabled={disabled} error={error} text={helperText} />
      )}
      {control && name && (
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange: controllerOnChange } }) => {
            internalControllerOnChange = controllerOnChange
            setInternalValue(value)
            return <></>
          }}
        />
      )}
    </Container>
  )
}
