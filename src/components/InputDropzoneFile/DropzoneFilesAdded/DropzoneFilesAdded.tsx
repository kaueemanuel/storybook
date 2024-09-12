import React from "react"
import { FileWithPath } from "react-dropzone"
import { useTranslation } from "react-i18next"

import {
  InputLabelProps,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material"

import { formatFileSizeDescription } from "../../../functions/formatFileSizeDescription"
import { theme } from "../../../themes"
import { IconButton } from "../../IconButton/IconButton"
import { Icon } from "../../Icons/Icon"
import { InputLabel } from "../../InputLabel/InputLabel"
import { FilesAddedBox, ListFilesBox } from "./DropzoneFilesAdded.styles"
import {
  DropzoneAudioTypeFormat,
  DropzoneImageTypeFormat,
  DropzoneTextTypeFormat,
  DropzoneVideoTypeFormat,
} from "./DropzoneFilesAddedTypesFormat"

interface DropzoneFilesAddedProps {
  labelFilesAdded?: string
  InputLabelFilesAddedProps?: InputLabelProps
  multiple?: boolean
  disabled?: boolean
  files?: FileAddedProps[]
  onDelete?: (file: FileAddedProps) => void
}

export type DropzoneInputFilesAddedProps = Omit<
  DropzoneFilesAddedProps,
  "multiple" | "disabled" | "files" | "onDelete"
>

export interface FileAddedProps extends FileWithPath {
  value?: string | ArrayBuffer | null
}

export const DropzoneFilesAdded: React.FC<DropzoneFilesAddedProps> = ({
  files = [],
  labelFilesAdded,
  multiple = false,
  disabled = false,
  onDelete = () => {},
  InputLabelFilesAddedProps = {},
}) => {
  const { t } = useTranslation()

  if (InputLabelFilesAddedProps?.style) {
    InputLabelFilesAddedProps.sx = InputLabelFilesAddedProps.style
  }

  const renderIconFile = (item) => {
    let { type: fileType } = item
    const { name: fileName } = item

    if (fileType === "" && item !== "") {
      fileType = fileName.split(".").pop()
    }

    if (DropzoneImageTypeFormat.includes(fileType)) {
      return <Icon name="image" color="success" />
    }

    if (DropzoneVideoTypeFormat.includes(fileType)) {
      return <Icon name="play_circle" color="error" />
    }

    if (DropzoneAudioTypeFormat.includes(fileType)) {
      return <Icon name="music_note" />
    }

    if (DropzoneTextTypeFormat.includes(fileType)) {
      return <Icon name="article" color="primary" />
    }

    return <Icon name="insert_drive_file" color="warning" />
  }

  const listFilesAdded = () => (
    <ListFilesBox>
      {files.map((item, index) => {
        return (
          <ListItem key={index} title={item.path} disableGutters dense>
            <ListItemIcon>{renderIconFile(item)}</ListItemIcon>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                noWrap: true,
                style: { maxWidth: 300, color: theme.palette.grey[700] },
              }}
              secondary={formatFileSizeDescription(item.size)}
              secondaryTypographyProps={{
                style: { color: theme.palette.accent.main },
              }}
            />
            <ListItemSecondaryAction>
              <IconButton
                disabled={disabled}
                icon="delete_outlined_pgv"
                onClick={() => {
                  onDelete(item)
                }}
                // disabled={disabled}
              />
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </ListFilesBox>
  )

  return (
    <FilesAddedBox>
      {multiple && files.length > 0 && (
        <InputLabel
          className="title-files-added"
          {...InputLabelFilesAddedProps}
          disabled={disabled}
        >
          {labelFilesAdded ?? t("inputDropzoneFile.filesAdded.label")}
        </InputLabel>
      )}
      {listFilesAdded()}
    </FilesAddedBox>
  )
}
