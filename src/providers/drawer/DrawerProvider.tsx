import { createContext, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

import {
  Box,
  DrawerProps as DrawerPropsMUI,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material"

import { CircularProgress } from "../../../lib/ui/components"
import {
  IconButton,
  IconButtonProps,
} from "../../components/IconButton/IconButton"
import { Icon } from "../../components/Icons/Icon"
import { theme } from "../../themes"
import { Drawer, DrawerContainer } from "./Drawer.styles"

interface DrawerProviderProps {
  children: React.ReactNode
}

export interface DrawerProps extends Omit<DrawerPropsMUI, "open"> {}

interface DrawerContextProps {
  openDrawer: (props: Omit<ContentProps, "open">) => void
  closeDrawer: () => Promise<void>
  setAnchor: (anchor: DrawerProps["anchor"]) => void
  setLoading: (isLoading: boolean) => void
  toggleFullscreen: () => void
  /**
   * Set the Drawer size. If you pass an undefined value, the Drawer size will be the default.
   *
   * @default 33.3...3%
   */
  setSize: (size?: React.CSSProperties["width"]) => void
  setOnCloseDrawer: (func: () => void) => void
}

export interface DrawerControlsProps {
  showButtonAnchor?: boolean
  showButtonFullscreen?: boolean
  noCloseButtonHeader?: boolean
  noTopButtonAnchor?: boolean
  noRightButtonAnchor?: boolean
  noLeftButtonAnchor?: boolean
  noBottomButtonAnchor?: boolean
}

export interface ContentProps {
  open: boolean
  drawerProps?: DrawerProps
  drawerContent: React.ReactNode | string
  loading?: boolean
  controlProps?: DrawerControlsProps
  onBackDropClick?: () => void
  onCloseClick?: () => void
}

export const DrawerContext = createContext<DrawerContextProps>({
  openDrawer: () => {},
  closeDrawer: async () => {},
  setAnchor: () => {},
  setLoading: () => {},
  toggleFullscreen: () => {},
  setSize: () => {},
  setOnCloseDrawer: () => {},
})

const SIZE_DRAWER = 100 / 3

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const { t } = useTranslation()

  const [loading, setLoading] = useState<boolean>(false)
  const [isFullscreen, setFullscreen] = useState<boolean>(false)
  const [initialDrawerProps, setInitialDrawerProps] = useState<DrawerProps>({
    anchor: "right",
  })
  const [drawerContentProps, setDrawerContent] = useState<ContentProps>({
    open: false,
    drawerContent: "",
    drawerProps: initialDrawerProps,
    controlProps: {
      noTopButtonAnchor: false,
      noLeftButtonAnchor: false,
      noRightButtonAnchor: false,
      noBottomButtonAnchor: false,
      noCloseButtonHeader: false,
      showButtonAnchor: false,
      showButtonFullscreen: false,
    },
  })

  const height = useMemo(() => {
    const paperProps =
      drawerContentProps.drawerProps?.PaperProps?.style ??
      drawerContentProps.drawerProps?.PaperProps?.sx

    return paperProps?.["height"] ?? `${SIZE_DRAWER}%`
  }, [
    drawerContentProps?.drawerProps?.PaperProps?.sx,
    drawerContentProps?.drawerProps?.PaperProps?.style,
  ])

  const width = useMemo(() => {
    const paperProps =
      drawerContentProps.drawerProps?.PaperProps?.style ??
      drawerContentProps.drawerProps?.PaperProps?.sx

    return paperProps?.["width"] ?? `${SIZE_DRAWER}%`
  }, [drawerContentProps?.drawerProps?.PaperProps])

  const drawerPropsDefault: DrawerProps = {
    anchor: "right",
  }

  const [onCloseDrawerSetabled, setOnCloseDrawerSetabled] =
    useState<() => void>()

  const closeDrawer = async (): Promise<void> => {
    if (isFullscreen) {
      setFullscreen(false)
    }

    setDrawerContent((prevState) => ({
      ...prevState,
      drawerProps: {
        ...initialDrawerProps,
        open: false,
        anchor: isFullscreen ? "bottom" : initialDrawerProps.anchor,
      },
    }))
    setOnCloseDrawerSetabled(undefined)

    return await new Promise((resolve) =>
      setTimeout(() => {
        resolve()
      }, 250)
    )
  }

  const handleOnClose = () => {
    if (onCloseDrawerSetabled) {
      onCloseDrawerSetabled()
      return
    }
    if (drawerContentProps.onCloseClick) {
      drawerContentProps.onCloseClick()
    } else {
      closeDrawer()
    }
  }

  const handleOnBackDropClose = () => {
    if (drawerContentProps.onBackDropClick) {
      drawerContentProps.onBackDropClick()
    } else if (onCloseDrawerSetabled) {
      onCloseDrawerSetabled()
    } else {
      closeDrawer()
    }
  }

  const setOnCloseDrawer = (func: () => void | undefined) => {
    if (func) {
      setOnCloseDrawerSetabled(() => func)
    } else {
      setOnCloseDrawerSetabled(undefined)
    }
  }

  const openDrawer = ({
    drawerProps = {},
    ...otherProps
  }: Omit<ContentProps, "open">) => {
    const drawerPropsCommon = {
      ...drawerPropsDefault,
      ...drawerProps,
    }

    setInitialDrawerProps({ ...drawerPropsCommon })
    setDrawerContent((prevState) => ({
      ...prevState,
      ...otherProps,
      drawerProps: {
        ...drawerPropsCommon,
        open: true,
      },
    }))
  }

  const setAnchor = (anchor: DrawerProps["anchor"]) => {
    if (isFullscreen) {
      toggleFullscreen()
    }

    setDrawerContent((prevState) => ({
      ...prevState,
      drawerProps: {
        ...prevState.drawerProps,
        anchor,
      },
    }))

    setInitialDrawerProps((prevState) => ({
      ...prevState,
      anchor,
    }))
  }

  const toggleFullscreen = () => {
    setFullscreen(!isFullscreen)
  }

  const setSize = (size?: React.CSSProperties["width"]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let resize: any = { width: size }

    setDrawerContent((prevState) => {
      if (
        prevState.drawerProps?.anchor &&
        ["top", "bottom"].includes(prevState.drawerProps.anchor)
      ) {
        resize = { height: size }
      }

      return {
        ...prevState,
        drawerProps: {
          ...prevState.drawerProps,
          PaperProps: {
            sx: { ...prevState.drawerProps?.sx, ...resize },
            style: { ...prevState.drawerProps?.style, ...resize },
          },
        },
      }
    })
  }

  const { open, drawerProps, drawerContent, controlProps } = drawerContentProps

  const OptionButtons = (): React.ReactNode => {
    const [menuEl, setMenuEl] = useState<null | HTMLElement>(null)
    const openMenu = Boolean(menuEl)

    const handleClickItem = (event: React.MouseEvent<HTMLElement>) => {
      setMenuEl(event.currentTarget)
    }

    const handleMenuItem = (anchor: DrawerProps["anchor"]) => {
      setMenuEl(null)
      setAnchor(anchor)
    }

    return (
      <>
        <IconButton
          style={{ width: "40px", height: "40px" }}
          tooltip={t("drawer.options.tooltip")}
          icon="more_vert"
          onClick={handleClickItem}
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
        />
        <Menu
          id="basic-menu"
          anchorEl={menuEl}
          open={openMenu}
          onClose={() => setMenuEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {!controlProps?.noLeftButtonAnchor && (
            <MenuItem
              dense
              onClick={() => handleMenuItem("left")}
              disabled={drawerProps?.anchor === "left"}
            >
              <ListItemIcon>
                <Icon
                  name="dock_to_right"
                  style={{ color: theme.palette.icon.action }}
                />
              </ListItemIcon>
              <ListItemText>{t("drawer.options.pin.left")}</ListItemText>
            </MenuItem>
          )}

          {!controlProps?.noRightButtonAnchor && (
            <MenuItem
              dense
              onClick={() => handleMenuItem("right")}
              disabled={drawerProps?.anchor === "right"}
            >
              <ListItemIcon>
                <Icon
                  name="dock_to_left"
                  style={{ color: theme.palette.icon.action }}
                />
              </ListItemIcon>
              <ListItemText>{t("drawer.options.pin.right")}</ListItemText>
            </MenuItem>
          )}

          {!controlProps?.noTopButtonAnchor && (
            <MenuItem
              dense
              onClick={() => handleMenuItem("top")}
              disabled={drawerProps?.anchor === "top"}
            >
              <ListItemIcon>
                <Icon
                  name="dock_to_bottom"
                  style={{
                    color: theme.palette.icon.action,
                    transform: "rotate(180deg)",
                  }}
                />
              </ListItemIcon>
              <ListItemText>{t("drawer.options.pin.top")}</ListItemText>
            </MenuItem>
          )}

          {!controlProps?.noBottomButtonAnchor && (
            <MenuItem
              dense
              onClick={() => handleMenuItem("bottom")}
              disabled={drawerProps?.anchor === "bottom"}
            >
              <ListItemIcon>
                <Icon
                  name="dock_to_bottom"
                  style={{ color: theme.palette.icon.action }}
                />
              </ListItemIcon>
              <ListItemText>{t("drawer.options.pin.bottom")}</ListItemText>
            </MenuItem>
          )}

          {controlProps?.showButtonFullscreen && (
            <MenuItem dense onClick={toggleFullscreen}>
              <ListItemIcon>
                {!isFullscreen ? (
                  <Icon
                    name="expand_content"
                    style={{ color: theme.palette.icon.action }}
                  />
                ) : (
                  <Icon
                    name="collapse_content"
                    style={{ color: theme.palette.icon.action }}
                  />
                )}
              </ListItemIcon>
              <ListItemText>
                {!isFullscreen
                  ? t("drawer.options.fullscreen.expand")
                  : t("drawer.options.fullscreen.contract")}
              </ListItemText>
            </MenuItem>
          )}
        </Menu>
      </>
    )
  }

  const getIconClose = (): IconButtonProps["icon"] => {
    if (isFullscreen) {
      return "close"
    }

    switch (drawerProps?.anchor) {
      case "top":
        return "expand_less"
      case "bottom":
        return "expand_more"
      case "left":
        return "chevron_left"
      default:
        return "chevron_right"
    }
  }

  const ButtonsHeader = (): React.ReactNode => (
    <Box className="buttons-header">
      {!controlProps?.noCloseButtonHeader && (
        <IconButton
          style={{ width: "40px", height: "40px" }}
          tooltip={t("drawer.control.close.tooltip")}
          icon={getIconClose()}
          onClick={handleOnClose}
        />
      )}
      {(controlProps?.showButtonAnchor ||
        controlProps?.showButtonFullscreen) && <OptionButtons />}
    </Box>
  )

  return (
    <DrawerContext.Provider
      value={{
        openDrawer,
        closeDrawer,
        setLoading,
        setAnchor,
        setSize,
        toggleFullscreen,
        setOnCloseDrawer,
      }}
    >
      <Drawer
        open={open}
        {...drawerProps}
        onClose={() => handleOnBackDropClose()}
        width={width}
        height={height}
        fullscreen={isFullscreen}
      >
        <DrawerContainer
          loading={loading}
          positionLeft={drawerProps?.anchor === "left"}
        >
          <div className="loading">
            <CircularProgress color="primary" />
          </div>
          <ButtonsHeader />
          <Box className="box-drawer">{!loading && drawerContent}</Box>
        </DrawerContainer>
      </Drawer>
      {children}
    </DrawerContext.Provider>
  )
}
