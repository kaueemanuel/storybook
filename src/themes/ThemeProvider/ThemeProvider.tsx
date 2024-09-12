import { useEffect } from "react"

import { ThemeProvider as ThemeProviderEmotion, Global } from "@emotion/react"
import {
  Theme,
  ThemeProvider as ThemeProviderMUI,
  CssBaseline,
} from "@mui/material"
import { ThemeProviderProps as MUIThemeProviderProps } from "@mui/material/styles/ThemeProvider"
import "../../styles/base.css"
import "./dayjsLocales"

import i18n from "../../locales/i18n"
import { DialogProvider } from "../../providers/dialog/DialogProvider"
import { DrawerProvider } from "../../providers/drawer/DrawerProvider"
import { ModalProvider } from "../../providers/modal/ModalProvider"
import globalStyles from "../../styles/globalStyles"
import { theme as defaultTheme } from "../index"
import { ThemeProps } from "../theme"

interface ThemeProviderProps extends Partial<MUIThemeProviderProps> {
  theme?: Partial<ThemeProps> | ((outerTheme: Theme) => Theme)
  i18nLang: string
}

export const ThemeProvider = ({
  theme = defaultTheme,
  i18nLang = "pt",
  children,
}: ThemeProviderProps) => {
  useEffect(() => {
    i18n.changeLanguage(i18nLang)
  }, [i18nLang])

  return (
    <ThemeProviderMUI theme={theme}>
      <ThemeProviderEmotion theme={theme}>
        <DialogProvider>
          <ModalProvider>
            <DrawerProvider>
              <Global styles={globalStyles} />
              <CssBaseline />
              {children}
            </DrawerProvider>
          </ModalProvider>
        </DialogProvider>
      </ThemeProviderEmotion>
    </ThemeProviderMUI>
  )
}
