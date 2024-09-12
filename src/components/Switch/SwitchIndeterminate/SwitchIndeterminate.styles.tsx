import styled from "@emotion/styled"
import SliderMUI, { SliderProps as SliderPropsMUI } from "@mui/material/Slider"

import { theme } from "../../../themes"

export interface SliderProps {
  size?: SliderPropsMUI["size"]
  color?: "primary" | "error"
}

export const SwitchIndeterminate = styled(SliderMUI)((props) => {
  const isSizeMedium = props?.size && props.size !== "small"
  return {
    width: isSizeMedium ? 40 : 33,
    height: isSizeMedium ? 24 : 17,
    padding: 0,
    "& .MuiSlider-thumb": {
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      boxSizing: "border-box",
      backgroundColor: "#fff",
      width: isSizeMedium ? 20 : 13,
      height: isSizeMedium ? 20 : 13,
      "&.Mui-disabled": {
        filter: "opacity(0.5)",
      },
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-track": {
      border: "none",
      borderRadius: (isSizeMedium ? 24 : 17) / 2,
    },
    "& .MuiSlider-rail": {
      opacity: 1,
      backgroundColor: props.color
        ? theme.palette[props.color].main
        : theme.palette.grey[100],
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }
})
