/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import DataRangePicker, { registerLocale } from "react-datepicker"

import * as locale from "date-fns/locale"
import dayjs from "dayjs"

import { ClickAwayListener, Grow, InputAdornment, Popper } from "@mui/material"

import i18n from "../../../locales/i18n"
import { IconButton } from "../../IconButton/IconButton"
import { InputLabel } from "../../InputLabel/InputLabel"
import { PopperProps } from "../../Popper/Popper"
import { TextField, TextFieldProps } from "../../TextField/TextField"
import { Container, PopperContainer } from "./DateRangePicker.styles"

export interface DateRangePickerProps
  extends Omit<TextFieldProps, "value" | "onChange"> {
  startDate: string
  minDate?: string
  maxDate?: string
  setStartDate: (
    newStartDate: string
  ) => void | Dispatch<SetStateAction<string>>
  endDate: string
  setEndDate: (newEndDate: string) => void | Dispatch<SetStateAction<string>>
  disabled?: boolean
  placement?: PopperProps["placement"]
  dateFormat?: string
  "data-testid"?: string
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  endDate,
  setEndDate,
  setStartDate,
  startDate,
  placement,
  dateFormat,
  minDate,
  maxDate,
  disabled,
  label,
  htmlFor,
  InputLabelProps,
  required,
  "data-testid": dataTestid = "daterange-picker",
  ...props
}) => {
  registerLocale(
    locale[i18n.language] ? i18n.language : "pt",
    locale[i18n.language] ? (locale[i18n.language] as any) : locale["pt"]
  )

  const formatStringDates = (start: string, end: string) => {
    if (!start || !end) return ""
    return `${start ? dayjs(start).format("DD/MM/YYYY") : ""} - ${
      end ? dayjs(end).format("DD/MM/YYYY") : ""
    }`
  }

  const ref = useRef<any>(null)
  const [open, setOpen] = useState(false)
  const [stringDates, setStringDates] = useState<string>(
    formatStringDates(startDate, endDate)
  )
  const hasDates = startDate && endDate
  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates
    const startString = start ? dayjs(start).format() : ""
    const endString = end
      ? dayjs(new Date(end).setUTCHours(23, 59, 59, 999)).format()
      : ""
    setStartDate(startString)
    setEndDate(endString)

    setStringDates(formatStringDates(startString, endString))
  }

  const clearDates = () => {
    setOpen(false)
    setStringDates("")
    setStartDate("")
    setEndDate("")
  }

  useEffect(() => {
    if (endDate) {
      setOpen(false)
    }
  }, [endDate])

  return (
    <>
      <Container data-testid={dataTestid}>
        {label && (
          <InputLabel
            htmlFor={htmlFor}
            {...InputLabelProps}
            required={required}
          >
            {label}
          </InputLabel>
        )}
        <TextField
          ref={ref}
          disabled={disabled}
          style={{
            position: "relative",
            minWidth: "234px",
          }}
          placeholder="DD/MM/YYYY - DD/MM/YYYY"
          {...props}
          value={stringDates}
          InputProps={{
            inputProps: {
              onClick: () => hasDates && setOpen(true),
            },
            style: {
              paddingRight: "4px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  disabled={disabled}
                  size="medium"
                  onClick={() => (hasDates ? clearDates() : setOpen(!open))}
                  onMouseDown={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                  }}
                  icon={hasDates ? "close" : "date_range"}
                  iconProps={{
                    fill: true,
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
        <Popper
          open={open}
          anchorEl={ref.current}
          placement={placement}
          className="popper-container"
          transition
        >
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Grow
                {...TransitionProps}
                timeout={350}
                style={{ transformOrigin: "top center" }}
              >
                <PopperContainer data-testid={"daterange-picker-popper"}>
                  <DataRangePicker
                    onChange={onChange}
                    minDate={minDate ? new Date(minDate) : null}
                    maxDate={maxDate ? new Date(maxDate) : null}
                    startDate={startDate ? new Date(startDate) : null}
                    endDate={hasDates ? new Date(endDate) : null}
                    selectsRange
                    locale={i18n.language}
                    dateFormat={dateFormat || "dd/MM/yyyy"}
                    inline
                  />
                </PopperContainer>
              </Grow>
            </ClickAwayListener>
          )}
        </Popper>
      </Container>
    </>
  )
}
