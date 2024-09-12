import React, { createContext, useState } from "react"

import { v4 as uuid } from "uuid"

import { Box, ModalProps as ModalPropsMUI } from "@mui/material"

import { CircularProgress } from "../../components/Loadings/CircularProgress/CircularProgress"
import { Modal, ModalContainer } from "./Modal.styles"

interface ModalProviderProps {
  children: React.ReactNode
}

export interface ModalProps extends Omit<ModalPropsMUI, "open" | "children"> {}

interface ModalContentElementProps {
  modalId: string
}

type JSXElementModalContent = (
  props: Partial<ModalContentElementProps>
) => JSX.Element

export interface ModalContentProps {
  modalContent: JSXElementModalContent | React.ReactNode | string
  modalProps?: ModalProps
  id?: string
  maxWidth?: string
  maxHeight?: string
}

interface ModalContextProps {
  openModal: (props: Omit<ModalContentProps, "open" | "children">) => void
  closeModal: (id?: string) => Promise<void>
}

export const ModalContext = createContext<ModalContextProps>({
  openModal: () => {},
  closeModal: async () => {},
})

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openModals, setOpenModals] = useState<ModalContentProps[]>([])

  const getStylesWithoutSizes = (styles) => {
    if (styles) {
      delete styles?.["width"]
      delete styles?.["maxWidth"]
      delete styles?.["height"]
      delete styles?.["maxHeight"]
    }

    return { ...styles }
  }

  const openModal = ({
    modalProps = {},
    ...otherProps
  }: Omit<ModalContentProps, "open">) => {
    const id = otherProps?.id ?? `modalpgv_${uuid()}`
    const { sx, style, ...otherModalProps } = modalProps

    const modalStyleProps = sx ?? style
    const maxWidth = modalStyleProps?.["width"] ?? modalStyleProps?.["maxWidth"]
    const maxHeight =
      modalStyleProps?.["height"] ?? modalStyleProps?.["maxHeight"]

    const newModalProps = {
      ...otherProps,
      id,
      modalProps: {
        onClose: () => closeModal(id),
        ...otherModalProps,
        sx: { ...getStylesWithoutSizes(sx) },
        style: { ...getStylesWithoutSizes(style) },
      },
      maxWidth,
      maxHeight,
    }

    setOpenModals((prevState) => [...prevState, newModalProps])
  }

  const closeModal = async (openIdModal?: string): Promise<void> => {
    setOpenModals((prevState: ModalContentProps[]) => {
      if (!openIdModal) {
        prevState.pop()
      }

      return [...prevState.filter(({ id }) => id !== openIdModal)]
    })

    return await new Promise((resolve) =>
      setTimeout(() => {
        resolve()
      }, 250)
    )
  }

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {openModals.map(
        (
          {
            id,
            modalContent,
            modalProps,
            maxWidth = "50vw",
            maxHeight = "70vh",
          },
          index
        ) => (
          <Modal open {...modalProps} id={id} key={index}>
            <ModalContainer maxWidth={maxWidth} maxHeight={maxHeight}>
              <div className="loading">
                <CircularProgress color="primary" />
              </div>
              <Box className="box-modal">
                {typeof modalContent === "function"
                  ? React.createElement(modalContent, {
                      modalId: id,
                    })
                  : modalContent}
              </Box>
            </ModalContainer>
          </Modal>
        )
      )}
      {children}
    </ModalContext.Provider>
  )
}
