import { IconButtonProps } from "../../IconButton/IconButton"
import { IconProps } from "../../Icons/Icon"
import { DatagridSelectedRow } from "./DatagridSelectedRow"

export interface DatagridExpandableButton {
  disabled?: boolean
  color?: IconButtonProps["color"]
  iconProps?: Omit<IconProps, "name">
}

export interface DatagridExpandable extends DatagridSelectedRow {
  height?: React.CSSProperties["height"]
  button?: DatagridExpandableButton
}
