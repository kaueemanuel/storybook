import styled from "@emotion/styled"
import {
  FormControlLabel as FormControlLabelMUI,
  FormControlLabelProps,
} from "@mui/material"
import SwitchMUI, { SwitchProps as SwitchPropsMUI } from "@mui/material/Switch"

import { theme } from "../../themes"

interface SwitchProps extends SwitchPropsMUI {
  size?: SwitchPropsMUI["size"]
  color?: SwitchPropsMUI["color"]
}

export const Switch = styled((props: SwitchProps) => (
  <SwitchMUI
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))((props) => {
  const isSizeMedium = props?.size && props.size !== "small"
  return {
    width: isSizeMedium ? 40 : 33,
    height: isSizeMedium ? 24 : 17,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            props?.color && props.color !== "default"
              ? theme.palette[props.color].main
              : theme.palette.primary.main,
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color:
          props?.color && props.color !== "default"
            ? theme.palette[props.color].main
            : theme.palette.primary.main,
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: isSizeMedium ? 20 : 13,
      height: isSizeMedium ? 20 : 13,
    },
    "& .MuiSwitch-track": {
      borderRadius: (isSizeMedium ? 24 : 17) / 2,
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }
})

export const FormControlLabel = styled((props: FormControlLabelProps) => (
  <FormControlLabelMUI {...props} />
))(() => {
  return {
    "& .MuiFormControlLabel-label": {
      fontSize: "14px",
      fontStyle: "normal !important",
      fontWeight: "400 !important",
      lineHeight: "20px !important",
      letterSpacing: "0.25px !important",
    },
  }
})
