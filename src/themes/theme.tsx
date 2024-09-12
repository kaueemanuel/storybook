import { Theme, createTheme } from "@mui/material/styles"

import {
  PaletteType,
  accentColorsModules,
  alertsColors,
  badgeColors,
  borderColors,
  iconColors,
  surfaceColors,
  systemColors,
  textColors,
} from "./custom-palette"

export interface ThemeProps extends Omit<Theme, "palette"> {
  palette: PaletteType
}

// A custom theme for this app
const theme: ThemeProps = createTheme({
  palette: {
    alerts: alertsColors,
    accent: accentColorsModules,
    badge: badgeColors,
    system: systemColors,
    surface: surfaceColors,
    icon: iconColors,
    border: borderColors,
    divider: systemColors.divider,
    background: {
      default: surfaceColors.surface1,
      paper: surfaceColors.surface1,
    },
    primary: {
      main: systemColors["blue-600"],
      dark: "#041E2C",
    },
    secondary: {
      main: systemColors["blue-400"],
      contrastText: systemColors["blue-600"],
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
    error: {
      main: "#E9786B",
      light: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ffa000",
      contrastText: "#fff",
    },
    text: textColors,
  } as PaletteType,
  typography: {
    fontFamily: `"Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif`,
    // body1: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "0.875rem",
    // },
    // body2: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "0.75rem",
    // },
    // button: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "0.875rem",
    //   fontWeight: 500,
    // },
    // h1: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "5rem",
    //   fontWeight: 400,
    // },
    // h2: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "3rem",
    //   fontWeight: 400,
    // },
    // h3: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "2.125rem",
    //   fontWeight: 400,
    // },
    // h4: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "1.5rem",
    //   fontWeight: 400,
    // },
    // h5: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "1.25rem",
    //   fontWeight: 400,
    // },
    // h6: {
    //   fontFamily: "Red Hat Display",
    //   fontSize: "1rem",
    //   fontWeight: 700,
    // },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: systemColors.tooltip,
        },
        tooltip: {
          fontSize: "0.75rem",
          letterSpacing: "0.025rem",
          color: textColors.inverse,
          backgroundColor: systemColors.tooltip,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#D9D9D9",
            fieldset: {
              borderColor: "#D9D9D9 !important",
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#E9786B",
          "&$error": {
            color: "#E9786B",
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
  },
}) as ThemeProps

export default theme
