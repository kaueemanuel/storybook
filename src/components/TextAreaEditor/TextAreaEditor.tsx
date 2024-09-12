import React, { useMemo } from "react"
import { Editor, EditorProps } from "react-draft-wysiwyg"

import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js"
import draftToHtml from "draftjs-to-html"

import { FormControlProps, InputLabelProps } from "@mui/material"

import i18n from "../../locales/i18n"
import { InputHelperText } from "../InputHelperText/InputHelperText"
import { InputLabel } from "../InputLabel/InputLabel"
import { ContainerHTMLEditor } from "./TextAreaEditor.styles"
import {
  ToolbarControlOptionsProps,
  ToolbarOptionsProps,
  InlineToolbarControlDefault,
  AlignmentToolbarControlDefault,
  LinkToolbarControlDefault,
  EmojiToolbarOptionDefault,
  InlineToolbarOption,
  AlignmentToolbarOption,
  EmojiToolbarOption,
  ColorPickerToolbarControlDefault,
  ColorPickerToolbarOption,
  ToolbarConfigEditorProps,
  LinkerToolbarOption,
} from "./TextAreaEditorProps"

type EditorOmittedProps = Omit<
  EditorProps,
  | "onChange"
  | "readOnly"
  | "localization"
  | "placeholder"
  | "toolbar"
  | "children"
  | "defaultEditorState"
  | "onEditorStateChange"
>

export interface TextAreaEditorProps extends EditorOmittedProps {
  rows?: number
  value?: string
  label?: string
  error?: boolean
  htmlFor?: string
  disabled?: boolean
  required?: boolean
  fullWidth?: boolean
  helperText?: string
  placeholder?: string
  onChange?: (text: EditorState) => void
  InputLabelProps?: InputLabelProps
  toolbarOptions?: ToolbarOptionsProps
  FormControlProps?: Omit<FormControlProps, "fullWidth">
  "data-testid"?: string
}

export const TextAreaEditor: React.FC<TextAreaEditorProps> = ({
  label,
  htmlFor,
  rows = 3,
  value = "",
  helperText,
  error = false,
  InputLabelProps,
  FormControlProps,
  placeholder = "",
  required = false,
  disabled = false,
  fullWidth = false,
  toolbarOptions = undefined,
  onChange = () => {},
  "data-testid": dataTestid = "textarea-editor",
  ...props
}) => {
  const DefaultToolbarOptions: ToolbarConfigEditorProps = {
    options: [
      InlineToolbarOption,
      AlignmentToolbarOption,
      ColorPickerToolbarOption,
      LinkerToolbarOption,
      EmojiToolbarOption,
    ],
    inline: InlineToolbarControlDefault,
    textAlign: AlignmentToolbarControlDefault,
    colorPicker: ColorPickerToolbarControlDefault,
    link: LinkToolbarControlDefault,
    emoji: EmojiToolbarOptionDefault,
  }

  const toolbarConfig = useMemo<ToolbarConfigEditorProps>(() => {
    const configs = {}
    const options: ToolbarControlOptionsProps[] = []

    if (!toolbarOptions) {
      return DefaultToolbarOptions
    }

    Object.entries(toolbarOptions).forEach(
      ([optionGroupName, optionsConfig]) => {
        options.push(optionGroupName as ToolbarControlOptionsProps)
        configs[optionGroupName] = {
          ...DefaultToolbarOptions[optionGroupName],
          options: optionsConfig,
        }
      }
    )

    return {
      options,
      ...configs,
    }
  }, [toolbarOptions])

  const editorState = useMemo(() => {
    const blocksFromHTML = convertFromHTML(value)

    return EditorState.createWithContent(
      ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      )
    )
  }, [value])

  const onEditorStateChange = (editorState) => {
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  if (InputLabelProps?.style) {
    InputLabelProps.sx = InputLabelProps.style
  }

  return (
    <>
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
      <ContainerHTMLEditor
        {...FormControlProps}
        rows={rows}
        error={error}
        disabled={disabled}
        fullWidth={fullWidth}
        className={disabled ? "Mui-disabled" : ""}
        data-testid={dataTestid}
      >
        <Editor
          {...props}
          readOnly={disabled}
          placeholder={placeholder}
          toolbar={toolbarConfig}
          localization={{
            locale: i18n.language,
          }}
          defaultEditorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
        {!!helperText && (
          <InputHelperText
            text={helperText}
            error={error}
            disabled={disabled}
          />
        )}
      </ContainerHTMLEditor>
    </>
  )
}
