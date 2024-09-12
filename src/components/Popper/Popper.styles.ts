import styled from "@emotion/styled"
import { Popper as PopperMUI, PopperProps } from "@mui/material"

import { theme } from "../../themes"

export const Popper = styled(PopperMUI)<PopperProps>({
  zIndex: 1,
  "& > div": {
    position: "relative",
  },
  "& > .MuiPaper-root": {
    minWidth: "80px",
    minHeight: "80px",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.25)",

    "& .box-popper": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      maxHeight: "600px",
    },

    "& .box-header": {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3),
      position: "sticky",
      top: 0,
      flexShrink: 0,
    },

    "& .box-content": {
      padding: theme.spacing(3),
      overflowY: "auto",
      flex: 1,
    },
  },
  '&[data-popper-placement*="bottom"]': {
    "& .MuiPopper-arrow": {
      top: "3px",
      width: "3em",
      height: "1em",
      "&::after": {
        transform: "rotate(-45deg)",
        boxShadow: "5px -5px 4px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  '&[data-popper-placement*="top"]': {
    "& .MuiPopper-arrow": {
      bottom: "-6px",
      width: "3em",
      height: "1em",
      "&::after": {
        transform: "rotate(-45deg)",
        boxShadow: "-5px 5px 4px -2px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  '&[data-popper-placement*="right"]': {
    "& .MuiPopper-arrow": {
      left: "3px",
      width: "1em",
      height: "3em",
      "&::after": {
        transform: "rotate(45deg)",
        boxShadow: "-5px 5px 4px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  '&[data-popper-placement*="left"]': {
    "& .MuiPopper-arrow": {
      right: "-6px",
      width: "1em",
      height: "3em",
      "&::after": {
        transform: "rotate(45deg)",
        boxShadow: "5px -5px 4px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
})

interface PopperContainerProps {
  loading?: boolean
}

export const PopperContainer = styled("div", {
  shouldForwardProp: (propName: string) => propName !== "loading",
})<PopperContainerProps>`
  .loading {
    transition: 0.5s;
    position: absolute;
    display: flex;
    opacity: ${({ loading }) => (loading ? "1" : "0")};
    visibility: ${({ loading }) => (loading ? "visible" : "hidden")};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`

export const Arrow = styled("div")({
  position: "absolute",
  fontSize: "9.5px",
  "&::after": {
    content: '" "',
    height: "20px",
    width: "20px",
    position: "absolute",
    boxSizing: "border-box",
    transformOrigin: "0 0",
    background: theme.palette.background.paper,
  },
})
