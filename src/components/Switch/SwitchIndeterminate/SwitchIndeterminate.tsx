import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useReducer,
  useState,
} from "react"

import isNumber from "lodash/isNumber"

import {
  FormControlLabel,
  FormControlLabelProps,
  SwitchProps,
} from "@mui/material"

import { SwitchIndeterminate as SwitchIndeterminateStyled } from "./SwitchIndeterminate.styles"

export interface SwitchIndeterminateProps extends Partial<SwitchProps> {
  label?: string
  controlLabelProps?: Omit<FormControlLabelProps, "label" | "control">
  "data-testid"?: string
}

interface SwitchState {
  index: number
  value: number
  color?: "primary" | "error"
}

const DefaultSwitchState: SwitchState = {
  index: 1,
  value: 2,
  color: undefined,
}

const AcceptSwitchState: SwitchState = {
  index: 1.4,
  value: 1,
  color: "primary",
}

const DeclineSwitchState: SwitchState = {
  index: 0.6,
  value: 0,
  color: "error",
}

const getSwitchState = (valueState: number): SwitchState => {
  let switchState: SwitchState
  switch (valueState) {
    case 0:
      switchState = DeclineSwitchState
      break
    case 1:
      switchState = AcceptSwitchState
      break
    default:
      switchState = DefaultSwitchState
  }

  return switchState
}

const getNextSwitchState = (valueState: number): SwitchState => {
  let switchState
  switch (valueState) {
    case 0:
      switchState = { ...DefaultSwitchState }
      break
    case 1:
      switchState = { ...DeclineSwitchState }
      break
    default:
      switchState = { ...AcceptSwitchState }
  }

  return switchState
}

const getChangeValue = (valueState: number, action): SwitchState => {
  const { onChange } = action

  const nextSwitchState = getNextSwitchState(valueState)

  onChange({
    value: String(nextSwitchState.value),
  })

  return nextSwitchState
}

const inputValueReducer = (state, action) => {
  const { type, value, ...otherActions } = action

  if (type === "initialValue") {
    const valueState = isNumber(Number(value))
      ? Number(value)
      : DefaultSwitchState.value
    return { ...getSwitchState(valueState) }
  }

  if (type === "change") {
    const valueState = isNumber(Number(state.value))
      ? Number(state.value)
      : DefaultSwitchState.value
    return getChangeValue(valueState, { ...otherActions })
  }

  return state
}

export const SwitchIndeterminate: ForwardRefExoticComponent<
  Omit<SwitchIndeterminateProps, "ref"> & RefAttributes<HTMLButtonElement>
> = React.forwardRef(
  (
    {
      value,
      label,
      disabled,
      controlLabelProps,
      onChange = () => {},
      defaultValue = DefaultSwitchState.value,
      "data-testid": dataTestid = "switch-indeterminate",
      ...props
    },
    ref
  ) => {
    const [rendered, setRendered] = useState(false)

    const [inputValue, dispatch] = useReducer(inputValueReducer, {
      ...DefaultSwitchState,
    })

    useEffect(() => {
      if (!rendered) {
        dispatch({
          type: "initialValue",
          value,
        })
      }
    }, [value])

    const onInputChange = () => {
      if (!disabled) {
        Promise.all([
          setRendered(true),
          dispatch({
            onChange,
            type: "change",
            value: inputValue.value,
          }),
        ]).catch(() => console.log("error change value"))
      }
    }

    const SwitchIndeterminateComponent = (
      <SwitchIndeterminateStyled
        min={0}
        max={2}
        disableSwap
        size="medium"
        track={false}
        sx={{ m: 1 }}
        disabled={disabled}
        color={inputValue.color}
        value={inputValue.index}
        defaultValue={Number(defaultValue)}
        aria-label="switch indeterminate"
        onChangeCommitted={onInputChange}
        {...props}
        data-testid={dataTestid}
        ref={ref}
      />
    )

    if (label === "") {
      return SwitchIndeterminateComponent
    }

    return (
      <FormControlLabel
        ref={ref}
        sx={{ paddingLeft: "3px" }}
        control={SwitchIndeterminateComponent}
        label={label || ""}
        disabled={disabled}
        {...controlLabelProps}
      />
    )
  }
)
