import CopyToClipboard from "react-copy-to-clipboard"

import { SnackbarKey, SnackbarMessage, closeSnackbar } from "notistack"

import { Box } from "@mui/material"

import { IconButton } from "../../components/IconButton/IconButton"

export interface SnackbarActionsProps {
  id: SnackbarKey
  message: SnackbarMessage
  onView?: () => void
  copyButton?: boolean
  closeButton?: boolean
}

export const SnackbarActions = (props: SnackbarActionsProps) => {
  const { id, onView, copyButton, closeButton, message } = props
  return (
    <Box display={"inline-block"}>
      {onView && (
        <IconButton
          icon="visibility"
          iconProps={{ fill: true }}
          size="small"
          color="inherit"
          onClick={onView}
        />
      )}
      {copyButton ? (
        <CopyToClipboard text={`${message}`}>
          <IconButton
            icon="copy_all"
            iconProps={{ fill: true }}
            size="small"
            color="inherit"
          />
        </CopyToClipboard>
      ) : null}
      {closeButton ? (
        <IconButton
          icon="close"
          color="inherit"
          size="small"
          onClick={() => closeSnackbar(id)}
        />
      ) : null}
    </Box>
  )
}
