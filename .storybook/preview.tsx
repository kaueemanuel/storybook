import type { Preview } from "@storybook/react"

import { withThemeFromJSXProvider } from "@storybook/addon-themes"
import { CssBaseline } from "@mui/material"
import { theme } from "../src/themes"
import { ThemeProvider } from "../src/themes/ThemeProvider/ThemeProvider"
import { BrowserRouter } from "react-router-dom"
import "../src/styles/base.css"
import React from "react"
import i18n from "../src/locales/i18n"

const Provider = ({ children }) => (
  <ThemeProvider i18nLang={i18n.language}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
)

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: "light",
    Provider: Provider,
    GlobalStyles: CssBaseline,
  }),
]

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
