/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useReducer } from "react"
import { useTranslation } from "react-i18next"
import { Location, NavigateFunction } from "react-router-dom"

import {
  Box,
  BoxProps,
  SxProps,
  Tab as TabMUI,
  TabProps as TabPropsMUI,
  TabsProps as TabsPropsMUI,
  Theme,
  Tooltip,
} from "@mui/material"

import { Icon } from "../Icons/Icon"
import { Container, TabsStyled } from "./Tabs.styles"

export interface TabPanelProps {
  children?: React.ReactNode | string
  value: number | string
  index: number
}

export interface TabControlsProps extends TabPropsMUI {
  tabContent: string | JSX.Element
  tabTextColor?: string
  tabTextActiveColor?: string
  tabIndicatorColor?: string
  panelContent: React.ReactNode | string
  hash?: string
  height?: string
  negativeNavHeight?: string
  headerContent?: JSX.Element | string
  path?: string
}

export interface TabsProps extends TabsPropsMUI {
  tabs: Array<TabControlsProps>
  sx?: SxProps<Theme>
  loading?: boolean
  borderColor?: string
  parentTabsProps?: Omit<BoxProps, "style">
  tabsActions?: JSX.Element
  onChange?: (event: React.SyntheticEvent, newValue: number) => void
  withHash?: boolean
  selectedTab?: number | null
  getSelectedTab?: (tab: number | null) => void
  "data-testid"?: string
  navigate: NavigateFunction
  useLocation: () => Location
}

export const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      key={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

const a11yProps = (index: number) => ({
  id: `tab-${index}`,
  "aria-controls": `tabpanel-${index}`,
})

function reducer(state, action) {
  switch (action.type) {
    case "change_tab": {
      return {
        value: action?.value,
        tabIndicatorColor: action?.tabIndicatorColor ?? undefined,
        textIndicatorColor: action?.textIndicatorColor ?? undefined,
      }
    }
    case "change_value": {
      return {
        ...state,
        value: action.value,
      }
    }
  }
  throw Error("Unknown action: " + action.type)
}

export const Tabs: React.FC<TabsProps> = ({
  tabs = [],
  tabsActions,
  loading = false,
  onChange = () => {},
  sx: sxProps,
  parentTabsProps = {},
  borderColor = "#2f4c68",
  withHash = false,
  getSelectedTab,
  selectedTab = undefined,
  "data-testid": dataTestid = "tabs",
  navigate,
  useLocation,
  ...props
}) => {
  const tabsHashes = withHash ? tabs.map((tab) => tab?.hash) : []
  const { t } = useTranslation()

  const location = useLocation()

  const getCurrentTabIndex = (): number => {
    return (withHash &&
      (tabsHashes.findIndex((hash) => hash === window.location.hash.slice(1)) >
      -1
        ? tabsHashes.findIndex((hash) => hash === window.location.hash.slice(1))
        : 0)) ||
      tabs.findIndex(
        (tab) => tab?.path === window.location.pathname.replace("/ui", ""),
      ) > -1
      ? tabs.findIndex(
          (tab) => tab?.path === window.location.pathname.replace("/ui", ""),
        )
      : 0
  }

  const initialTab = getCurrentTabIndex()

  const [{ value, tabIndicatorColor, textIndicatorColor }, dispatch] =
    useReducer(reducer, {
      value: initialTab,
      tabIndicatorColor: tabs?.[initialTab]?.tabIndicatorColor,
      textIndicatorColor: tabs?.[initialTab]?.tabTextActiveColor,
    })

  const listener = () => {
    if (withHash) {
      const hashIndex = tabsHashes.findIndex(
        (hash) => hash === window.location.hash.slice(1),
      )
      if (hashIndex > -1) {
        dispatch({
          type: "change_tab",
          value: hashIndex,
          tabIndicatorColor: tabs[hashIndex].tabIndicatorColor,
          textIndicatorColor: tabs[hashIndex].tabTextActiveColor,
        })
      }
    } else {
      const tabIndex = tabs.findIndex(
        ({ path }) => path === window.location.pathname.replace("/ui", ""),
      )
      if (tabIndex > -1) {
        dispatch({
          type: "change_tab",
          value: tabIndex,
          tabIndicatorColor: tabs[tabIndex].tabIndicatorColor,
          textIndicatorColor: tabs[tabIndex].tabTextActiveColor,
        })
      }
    }
  }

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    window.removeEventListener("hashchange", listener)

    if (tabs?.[newValue]?.path && navigate) {
      navigate(tabs[newValue].path || "", { replace: true })
    }

    if (
      withHash &&
      tabs[newValue].hash &&
      window.location.hash !== `#${tabsHashes[newValue]}`
    ) {
      window.location.hash = `#${tabsHashes[newValue]}`
    }
    dispatch({
      type: "change_tab",
      value: newValue,
      tabIndicatorColor: tabs[newValue].tabIndicatorColor,
      textIndicatorColor: tabs[newValue].tabTextActiveColor,
    })
    onChange(event, newValue)

    setTimeout(() => {
      window.addEventListener("hashchange", listener)
    }, 20)
  }

  const indicatorProps = useMemo(() => {
    return tabIndicatorColor
      ? {
          ".MuiTabs-indicator": {
            backgroundColor: tabIndicatorColor,
          },
        }
      : null
  }, [tabIndicatorColor])

  const textIndicatorProps = useMemo(() => {
    return textIndicatorColor
      ? {
          ".Mui-selected": {
            color: `${textIndicatorColor} !important`,
            fontWeight: 600,
          },
        }
      : null
  }, [textIndicatorColor])

  useEffect(() => {
    window.addEventListener("hashchange", listener)
    return () => {
      window.removeEventListener("hashchange", listener)
    }
  }, [])

  useEffect(() => {
    const newValue = getCurrentTabIndex()
    if (tabs?.[newValue]) {
      dispatch({
        type: "change_tab",
        value: newValue,
        tabIndicatorColor: tabs[newValue].tabIndicatorColor,
        textIndicatorColor: tabs[newValue].tabTextActiveColor,
      })
    }
  }, [location.pathname])

  useEffect(() => {
    if (getSelectedTab) {
      getSelectedTab(value)
    }
  }, [value])

  const { sx: sxParentTabs, ...otherParentTabsProps } = parentTabsProps

  return (
    <Container loading={loading} data-testid={dataTestid}>
      <Box display="flex" alignItems="center" gap={3}>
        <Box
          sx={{
            flex: 1,
            borderBottom: 2,
            borderColor,
            width: "100%",
            ...sxParentTabs,
          }}
          {...otherParentTabsProps}
        >
          {(selectedTab === undefined || selectedTab || selectedTab === 0) && (
            <TabsStyled
              value={value}
              onChange={handleChangeTab}
              aria-label="lab API tabs example"
              sx={{
                ...sxProps,
                ...indicatorProps,
                ...textIndicatorProps,
              }}
              {...props}
            >
              {(tabs as any).map(
                (
                  {
                    tabTextColor,
                    tabContent,
                    onClose,
                    path,
                    ...propsControl
                  }: any,
                  index: number,
                ) => {
                  delete propsControl.headerContent
                  delete propsControl.panelContent
                  delete propsControl.negativeNavHeight
                  delete propsControl.tabIndicatorColor
                  delete propsControl.tabTextActiveColor
                  return (
                    <TabMUI
                      label={
                        onClose ? (
                          <span className="floating-tab">
                            {tabContent}
                            <Tooltip title={t("label.close")} placement="top">
                              <div>
                                <Icon
                                  name="close"
                                  style={{ color: "white" }}
                                  size={20}
                                  onClick={(event) => {
                                    event.stopPropagation()
                                    event.preventDefault()
                                    onClose(path)
                                    if (selectedTab === index) {
                                      handleChangeTab(event, index - 1)
                                    }
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </span>
                        ) : (
                          tabContent
                        )
                      }
                      {...a11yProps(index)}
                      {...propsControl}
                      key={`tab-${index + 1}`}
                      sx={{ color: tabTextColor || undefined }}
                    />
                  )
                },
              )}
            </TabsStyled>
          )}
        </Box>

        {!!tabsActions && tabsActions}
      </Box>
      {(selectedTab === undefined || selectedTab || selectedTab === 0) &&
        tabs.map(({ panelContent }, index) => (
          <TabPanel
            value={value}
            index={index}
            key={`tab-panel-content-${index + 1}`}
          >
            {panelContent}
          </TabPanel>
        ))}
    </Container>
  )
}
