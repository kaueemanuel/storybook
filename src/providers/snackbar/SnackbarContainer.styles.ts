import { MaterialDesignContent } from "notistack"

import { styled } from "@mui/material"

import { theme } from "../../themes"

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  () => ({
    paddingTop: "12px",
    paddingBottom: "12px",
    backgroundColor: theme.palette.alerts["grey-bg"],
    color: theme.palette.alerts["grey"],
    "& span": {
      color: `${theme.palette.alerts["grey"]} !important`,
    },
    fontFamily: theme.typography.fontFamily,
    flexWrap: "nowrap",
    boxShadow: "none",
    "&.notistack-MuiContent-success": {
      backgroundColor: theme.palette.alerts["green-bg"],
      color: theme.palette.alerts["green"],
      "& span": {
        color: `${theme.palette.alerts["green"]} !important`,
      },
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: theme.palette.alerts["red-bg"],
      color: theme.palette.alerts["red"],
      "& span": {
        color: `${theme.palette.alerts["red"]} !important`,
      },
    },
    "&.notistack-MuiContent-warning": {
      backgroundColor: theme.palette.alerts["yellow-bg"],
      color: theme.palette.alerts["yellow"],
      "& span": {
        color: `${theme.palette.alerts["yellow"]} !important`,
      },
    },
    "&.notistack-MuiContent-info": {
      backgroundColor: theme.palette.alerts["blue-bg"],
      color: theme.palette.alerts["blue"],
      "& span": {
        color: `${theme.palette.alerts["blue"]} !important`,
      },
    },
    ".MuiBox-root": {
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
    },
  })
)
