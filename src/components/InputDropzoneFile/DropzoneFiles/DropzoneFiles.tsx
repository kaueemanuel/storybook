import React, { useCallback, useImperativeHandle, useState } from "react"
import {
  Accept,
  DropzoneOptions,
  FileRejection,
  FileWithPath,
  useDropzone,
} from "react-dropzone"
import { Trans, useTranslation } from "react-i18next"

import { Link, Typography } from "@mui/material"

import { formatFileSizeDescription } from "../../../functions/formatFileSizeDescription"
import { openSnackbar } from "../../../providers/snackbar/SnackbarFunctions"
import { Icon } from "../../Icons/Icon"
import { CircularProgress } from "../../Loadings/CircularProgress/CircularProgress"
import { FileAddedProps } from "../DropzoneFilesAdded/DropzoneFilesAdded"
import { DropzoneBox } from "./DropzoneFiles.styles"

type DropzoneProps = Omit<
  DropzoneOptions,
  | "multiple"
  | "disabled"
  | "acceptable"
  | "onDrop"
  | "onDropAccepted"
  | "onDropRejected"
>

interface DropzoneBoxFilesProps {
  error?: boolean
  multiple?: boolean
  disabled?: boolean
  required?: boolean
  acceptableTypes?: Accept
  dropzoneProps?: DropzoneProps
  onFileAdd?: (
    file: FileAddedProps,
    binaryStr: string | ArrayBuffer | null
  ) => void
}

export type DropzoneFilesProps = Omit<DropzoneBoxFilesProps, "multiple">

export const DropzoneFiles: React.FC<DropzoneBoxFilesProps> = React.forwardRef(
  (
    {
      dropzoneProps,
      error = false,
      multiple = false,
      disabled = false,
      acceptableTypes = {},
      onFileAdd = () => {},
    },
    ref
  ) => {
    const [loading, setLoading] = useState<boolean>(false)

    const onDrop = useCallback(
      (acceptedFiles: FileWithPath[]) => {
        // Do something with the files
        acceptedFiles.forEach((file: FileWithPath) => {
          const reader = new FileReader()
          reader.onabort = () => console.log("file reading was aborted")
          reader.onerror = () => console.log("file reading has failed")

          reader.onloadstart = () => {
            setLoading(true)
          }

          reader.onloadend = () => {
            const binaryStr = reader.result
            onFileAdd(file, binaryStr)
            setLoading(false)
          }

          reader.readAsDataURL(file)
        })
      },
      [onFileAdd, setLoading]
    )

    const getMessageError = (errorCode, file) => {
      switch (errorCode) {
        case "file-too-large":
          return `O arquivo ${
            file.name
          } possui um tamanho maior do que ${formatFileSizeDescription(
            dropzoneProps?.maxSize
          )}.`
        case "file-too-small":
          return `O arquivo ${
            file.name
          } possui um tamanho menor do que ${formatFileSizeDescription(
            dropzoneProps?.minSize
          )}.`
        case "too-many-files":
          return `Não é permitido selecionar mais de ${dropzoneProps?.maxFiles} arquivo(s).`
        default:
          return `O arquivo ${file.name} possui formato inválido.`
      }
    }

    const onDropRejected = (rejectedFiles: FileRejection[]) => {
      rejectedFiles.map(({ file, errors }) => {
        errors.map((error) => {
          openSnackbar(getMessageError(error.code, file), { variant: "error" })
        })
      })
    }

    const { t } = useTranslation()
    const { rootRef, getRootProps, getInputProps, isDragActive } = useDropzone({
      ...dropzoneProps,
      onDrop,
      multiple,
      disabled,
      onDropRejected,
      accept: acceptableTypes,
    })

    useImperativeHandle(ref, () => rootRef.current, [rootRef])

    return (
      <DropzoneBox
        {...getRootProps()}
        ref={ref}
        error={error}
        loading={loading}
        disabled={disabled}
      >
        <div className="loading">
          <CircularProgress color="primary" />
        </div>

        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography>
            {multiple
              ? t("inputDropzoneFile.dropMultiple.label")
              : t("inputDropzoneFile.drop.label")}
          </Typography>
        ) : (
          <>
            <Icon name="cloud_upload_pgv" />
            <Typography>
              {multiple ? (
                <Trans
                  i18nKey="inputDropzoneFile.dragMultiple.label"
                  components={[<Link className="click-here" />]}
                />
              ) : (
                <Trans
                  i18nKey="inputDropzoneFile.drag.label"
                  components={[<Link className="click-here" />]}
                />
              )}
            </Typography>
          </>
        )}
      </DropzoneBox>
    )
  }
)
