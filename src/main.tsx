import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { Global } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

import Playground from "./Playground.tsx"
import { DialogProvider } from "./providers/dialog/DialogProvider.tsx"
import { DrawerProvider } from "./providers/drawer/DrawerProvider.tsx"
import { ModalProvider } from "./providers/modal/ModalProvider.tsx"
import { SnackbarProvider } from "./providers/snackbar/SnackbarProvider.tsx"
import { theme } from "./themes"
import { ThemeProvider } from "./themes/ThemeProvider/ThemeProvider.tsx"

import globalStyles from "./styles/globalStyles.ts"

const defaultLang = "pt"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={defaultLang}
    >
      <ThemeProvider theme={theme} i18nLang={defaultLang}>
        <DialogProvider>
          <ModalProvider>
            <DrawerProvider>
              <SnackbarProvider maxSnack={5} />
              <Global styles={globalStyles} />
              <CssBaseline />
              <BrowserRouter>
                <Playground />
              </BrowserRouter>
            </DrawerProvider>
          </ModalProvider>
        </DialogProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </>,
)
