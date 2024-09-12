import { useContext } from "react"

import { DrawerContext } from "../DrawerProvider"

export const useDrawer = () => {
  const {
    openDrawer,
    closeDrawer,
    setSize,
    setAnchor,
    setLoading,
    toggleFullscreen,
    setOnCloseDrawer,
  } = useContext(DrawerContext)

  return {
    openDrawer,
    closeDrawer,
    setSize,
    setAnchor,
    setLoading,
    toggleFullscreen,
    setOnCloseDrawer,
  }
}
