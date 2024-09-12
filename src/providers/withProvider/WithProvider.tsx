/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react"

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

import i18n from "../../locales/i18n"
import { RequestsProvider } from "../../requests/RequestsProvider"
import { ThemeProps } from "../../themes"
import { ThemeProvider } from "../../themes/ThemeProvider/ThemeProvider"
import { SnackbarProvider } from "../snackbar/SnackbarProvider"
export interface LocalizationProviderProps {
  LocalizationProvider: React.ComponentType<any>
  providerProps: {
    dateAdapter: typeof AdapterDayjs
  }
}

export interface WithProviderOptions {
  theme?: Partial<ThemeProps>
  language?: string
  localizationProvider: LocalizationProviderProps
  requestsProps?: {
    useAuthStore: any
  }
}

export interface BaseProviderProps extends WithProviderOptions {
  children: JSX.Element | React.ReactNode
}

export const BaseProvider = ({
  theme,
  children,
  localizationProvider,
  language,
  requestsProps,
}: BaseProviderProps) => {
  const {
    LocalizationProvider,
    providerProps: { dateAdapter },
  } = localizationProvider

  const content = useMemo(
    () =>
      requestsProps ? (
        <RequestsProvider useAuthStore={requestsProps.useAuthStore}>
          {children}
        </RequestsProvider>
      ) : (
        children
      ),
    [children],
  )

  return (
    <LocalizationProvider
      dateAdapter={dateAdapter}
      adapterLocale={language || i18n.language}
    >
      <ThemeProvider theme={theme} i18nLang={language || i18n.language}>
        <SnackbarProvider maxSnack={5} />
        {content}
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export function withProvider(
  Component: React.FC<any> | React.ComponentType<any>,
  options: WithProviderOptions,
) {
  return function WithThemeComponent(props: any) {
    return (
      <BaseProvider {...options}>
        <Component {...props} />
      </BaseProvider>
    )
  }
}
