import {
  OptionsObject,
  SnackbarKey,
  SnackbarMessage,
  enqueueSnackbar,
} from "notistack"

import { SnackbarActions } from "./SnackbarActions"

export interface OpenSnackbarOptionsProps extends OptionsObject {
  onView?: () => void
  copyButton?: boolean
  closeButton?: boolean
}

export interface OpenSnackbarProps {
  message: SnackbarMessage
  options?: OpenSnackbarOptionsProps
}

export function openSnackbar(
  message: SnackbarMessage,
  options?: OpenSnackbarOptionsProps,
): SnackbarKey {
  const initialOptions: OpenSnackbarOptionsProps = {
    variant: "default",
    autoHideDuration: 3000,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    copyButton: false,
    closeButton: true,
  }

  let variantOptions: OpenSnackbarOptionsProps = {}
  const variant = options?.variant || initialOptions.variant
  switch (variant) {
    case "success":
      variantOptions = {
        autoHideDuration: 7000,
        copyButton: false,
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
      }
      break
    case "warning":
      variantOptions = {
        autoHideDuration: 12000,
        copyButton: false,
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
      }
      break
    case "error":
      variantOptions = {
        persist: true,
        copyButton: false,
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
      }
      break
  }

  const AllOptions = {
    ...initialOptions,
    ...variantOptions,
    ...options,
  }

  return enqueueSnackbar(message, {
    action: (id) => (
      <SnackbarActions
        id={id}
        message={message}
        onView={AllOptions?.onView}
        closeButton={AllOptions?.closeButton}
        copyButton={AllOptions?.copyButton}
      />
    ),
    ...AllOptions,
  })
}
