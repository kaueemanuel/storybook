import React, { useEffect, useState } from "react"
import { FileWithPath } from "react-dropzone"

import { FormHelperText, InputLabelProps } from "@mui/material"

import { InputLabel } from "../InputLabel/InputLabel"
import {
  DropzoneFiles,
  DropzoneFilesProps,
} from "./DropzoneFiles/DropzoneFiles"
import {
  FileAddedProps,
  DropzoneFilesAdded,
  DropzoneInputFilesAddedProps,
} from "./DropzoneFilesAdded/DropzoneFilesAdded"
import { Container } from "./InputDropzoneFile.styles"

export interface InputDropzoneFilesProps
  extends DropzoneFilesProps,
    DropzoneInputFilesAddedProps {
  label?: string
  htmlFor?: string
  disabled?: boolean
  multiple?: boolean
  helperText?: string
  value?: FileWithPath[]
  InputLabelProps?: InputLabelProps
  onDrop: (files: FileAddedProps[]) => void
  onDelete?: (fileDeleted: FileAddedProps, files: FileAddedProps[]) => void
  "data-testid"?: string
}

export const InputDropzoneFile: React.FC<InputDropzoneFilesProps> = ({
  label,
  onDrop,
  htmlFor,
  helperText,
  value = [],
  error = false,
  required = false,
  multiple = false,
  disabled = false,
  onDelete = () => {},
  InputLabelProps = {},
  "data-testid": dataTestid = "input-dropzone-file",
  ...props
}) => {
  const [filesAdded, setFilesAdded] = useState<FileAddedProps[]>([])

  useEffect(() => {
    if (value.length > 0) {
      setFilesAdded(value)
    }
  }, [value])

  if (InputLabelProps?.style) {
    InputLabelProps.sx = InputLabelProps.style
  }

  return (
    <Container disabled={disabled} data-testid={dataTestid}>
      <section style={{ width: "100%" }}>
        {label && (
          <InputLabel
            htmlFor={htmlFor}
            {...InputLabelProps}
            required={required}
            disabled={disabled}
          >
            {label}
          </InputLabel>
        )}
        <div className="input-dropzone">
          {((!multiple && filesAdded.length === 0) || multiple) && (
            <DropzoneFiles
              {...props}
              error={error}
              required={required}
              multiple={multiple}
              disabled={disabled}
              onFileAdd={(fileAdded, binaryBuffer) => {
                const fileAddedBuffered: FileAddedProps = fileAdded
                fileAddedBuffered.value = binaryBuffer

                setFilesAdded((prevFiles) => {
                  const filesAddedUpdated = [...prevFiles, fileAddedBuffered]
                  onDrop(filesAddedUpdated)

                  return filesAddedUpdated
                })
              }}
            />
          )}

          {!!helperText && (
            <FormHelperText error={error}>{helperText}</FormHelperText>
          )}

          <DropzoneFilesAdded
            {...props}
            files={filesAdded}
            multiple={multiple}
            disabled={disabled}
            onDelete={(fileDeleted: FileAddedProps) => {
              const filesFiltered = filesAdded.filter(
                (val) => val.name !== fileDeleted.name
              )
              setFilesAdded(filesFiltered)
              onDelete(fileDeleted, filesFiltered)
            }}
          />
        </div>
      </section>
    </Container>
  )
}
