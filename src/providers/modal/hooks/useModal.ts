import { useContext } from "react"

import { ModalContext } from "../ModalProvider"

export const useModal = () => {
  const { openModal, closeModal } = useContext(ModalContext)

  return {
    openModal,
    closeModal,
  }
}
