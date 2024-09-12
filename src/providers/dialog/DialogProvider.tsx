import { createContext, useState } from "react"

import { Box, DialogProps as DialogPropsMUI } from "@mui/material"

import { Dialog, DialogContainer } from "./Dialog.styles"

interface DialogProviderProps {
  children: React.ReactNode
}

export interface DialogProps extends Omit<DialogPropsMUI, "open"> {}

export interface ContentProps {
  open: boolean
  dialogProps?: DialogProps
  dialogContent: React.ReactNode | string
  loading?: boolean
}

interface DialogContextProps {
  openDialog: (props: Omit<ContentProps, "open">) => void
  closeDialog: () => Promise<void>
  setLoading: (isLoading: boolean) => void
}

export const DialogContext = createContext<DialogContextProps>({
  openDialog: () => {},
  closeDialog: async () => {},
  setLoading: () => {},
})

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [dialogContentProps, setDialogContent] = useState<ContentProps>({
    open: false,
    dialogContent: "",
    dialogProps: {},
  })

  const openDialog = ({
    dialogProps = {},
    ...otherProps
  }: Omit<ContentProps, "open">) => {
    setDialogContent((prevState) => ({
      ...prevState,
      ...otherProps,
      dialogProps: {
        onClose: closeDialog,
        ...dialogProps,
      },
      open: true,
    }))
  }

  const closeDialog = async (): Promise<void> => {
    setDialogContent((prevState) => ({
      ...prevState,
      open: false,
    }))

    return await new Promise((resolve) =>
      setTimeout(() => {
        resolve()
      }, 250),
    )
  }

  const { open, dialogProps, dialogContent } = dialogContentProps

  return (
    <DialogContext.Provider
      value={{
        openDialog,
        closeDialog,
        setLoading,
      }}
    >
      <Dialog open={open} maxWidth={false} {...dialogProps}>
        <DialogContainer loading={loading}>
          <Box className="box-dialog">{!loading && dialogContent}</Box>
        </DialogContainer>
      </Dialog>
      {children}
    </DialogContext.Provider>
  )
}
