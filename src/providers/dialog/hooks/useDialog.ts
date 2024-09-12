import { useContext } from "react"

import { DialogContext } from "../DialogProvider"

export const useDialog = () => {
  const { openDialog, closeDialog, setLoading } = useContext(DialogContext)

  return {
    openDialog,
    closeDialog,
    setLoading,
  }
}
