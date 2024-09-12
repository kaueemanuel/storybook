import { IconNameType } from "../Icons/IconNameType"
import {
  BoldToolbarOption,
  CenterAlignToolbarOption,
  ItalicToolbarOption,
  JustifyAlignToolbarOption,
  LeftAlignToolbarOption,
  LinkToolbarOption,
  RightAlignToolbarOption,
  StrikeToolbarOption,
  UnderlineToolbarOption,
  UnlinkToolbarOption,
} from "./TextAreaEditor.constants"

interface ToolbarControlsProps {
  inDropdown?: boolean
  className?: string
  component?: React.ReactNode
  popupClassName?: string
  dropdownClassName?: string
}

interface CommonToolbarProps {
  className?: string
  icon?: IconNameType
}

/**
 * Inline Toolbar Options
 */
export const InlineToolbarOption = "inline"

type InlineToolbarOptionsType =
  | typeof BoldToolbarOption
  | typeof ItalicToolbarOption
  | typeof UnderlineToolbarOption
  | typeof StrikeToolbarOption

interface InlineToolbarControlProps
  extends Omit<Partial<ToolbarControlsProps>, "options"> {
  options: InlineToolbarOptionsType[]
  bold?: CommonToolbarProps
  italic?: CommonToolbarProps
  underline?: CommonToolbarProps
  strikethrough?: CommonToolbarProps
}

export const InlineToolbarControlDefault: InlineToolbarControlProps = {
  inDropdown: false,
  options: [
    BoldToolbarOption,
    ItalicToolbarOption,
    UnderlineToolbarOption,
    StrikeToolbarOption,
  ],
  // bold: { icon: bold, className: undefined },
  // italic: { icon: italic, className: undefined },
  // underline: { icon: underline, className: undefined },
  // strikethrough: { icon: strikethrough, className: undefined },
}

/**
 * Alignment Toolbar Options
 */
export const AlignmentToolbarOption = "textAlign"

type AlignmentToolbarOptionsType =
  | typeof LeftAlignToolbarOption
  | typeof CenterAlignToolbarOption
  | typeof RightAlignToolbarOption
  | typeof JustifyAlignToolbarOption

interface AlignmentToolbarControlProps
  extends Omit<Partial<ToolbarControlsProps>, "options"> {
  options: AlignmentToolbarOptionsType[]
  left?: CommonToolbarProps
  center?: CommonToolbarProps
  right?: CommonToolbarProps
  justify?: CommonToolbarProps
}

export const AlignmentToolbarControlDefault: AlignmentToolbarControlProps = {
  inDropdown: false,
  options: [
    LeftAlignToolbarOption,
    CenterAlignToolbarOption,
    RightAlignToolbarOption,
    JustifyAlignToolbarOption,
  ],
  // left: { icon: left, className: undefined },
  // center: { icon: center, className: undefined },
  // right: { icon: right, className: undefined },
  // justify: { icon: justify, className: undefined },
}

/**
 * Color Picker Toolbar Options
 */
export const ColorPickerToolbarOption = "colorPicker"

type ColorPickerToolbarOptionsType = typeof ColorPickerToolbarOption

interface ColorPickerControlProps
  extends CommonToolbarProps,
    Partial<ToolbarControlsProps> {}

export const ColorPickerToolbarControlDefault: ColorPickerControlProps = {
  // icon: color,
  // className: undefined,
  // component: undefined,
  // popupClassName: undefined,
}

/**
 * Link Toolbar Options
 */
export const LinkerToolbarOption = "link"

type LinkToolbarOptionsType =
  | typeof LinkToolbarOption
  | typeof UnlinkToolbarOption

interface LinkToolbarControlProps
  extends Omit<CommonToolbarProps, "icon">,
    Omit<Partial<ToolbarControlsProps>, "options"> {
  linkCallback?: string
  defaultTargetOption?: string
  showOpenOptionOnHover?: boolean
  options: LinkToolbarOptionsType[]
  link?: CommonToolbarProps
  unlink?: CommonToolbarProps
}

export const LinkToolbarControlDefault: LinkToolbarControlProps = {
  inDropdown: false,
  // className: undefined,
  // component: undefined,
  // linkCallback: undefined,
  // popupClassName: undefined,
  // dropdownClassName: undefined,
  showOpenOptionOnHover: true,
  defaultTargetOption: "_self",
  options: [LinkToolbarOption, UnlinkToolbarOption],
  // link: { icon: link, className: undefined },
  // unlink: { icon: unlink, className: undefined },
}

/**
 * Emoji Toolbar Options
 */
export const EmojiToolbarOption = "emoji"

type EmojiToolbarOptionType = typeof EmojiToolbarOption

interface EmojiToolbarControlProps
  extends CommonToolbarProps,
    Omit<Partial<ToolbarControlsProps>, "options"> {}

export const EmojiToolbarOptionDefault: EmojiToolbarControlProps = {
  // icon: emoji,
  className: undefined,
  component: undefined,
  popupClassName: undefined,
}

export type ToolbarControlOptionsProps =
  | typeof InlineToolbarOption
  | typeof AlignmentToolbarOption
  | typeof ColorPickerToolbarOption
  | typeof LinkToolbarOption
  | typeof EmojiToolbarOption

export type ToolbarOptionsProps = {
  inline?: InlineToolbarOptionsType[]
  textAlign?: AlignmentToolbarOptionsType[]
  colorPicker?: ColorPickerToolbarOptionsType[]
  link?: LinkToolbarOptionsType[]
  emoji?: EmojiToolbarOptionType[]
}

export interface ToolbarConfigEditorProps {
  options: ToolbarControlOptionsProps[]
  inline?: InlineToolbarControlProps
  textAlign?: AlignmentToolbarControlProps
  colorPicker?: ColorPickerControlProps
  link?: LinkToolbarControlProps
  emoji?: EmojiToolbarControlProps
}
