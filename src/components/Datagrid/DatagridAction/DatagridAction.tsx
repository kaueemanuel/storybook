/* eslint-disable @typescript-eslint/no-explicit-any */
import { TooltipProps } from "@mui/material"
import { GridValidRowModel } from "@mui/x-data-grid"

import {
  IconButton,
  IconButtonProps,
} from "../../../components/IconButton/IconButton"
import { IconProps } from "../../Icons/Icon"
import { IconNameType } from "../../Icons/IconNameType"

export interface DatagridActionProps<R extends GridValidRowModel = any> {
  tooltip?: string
  tooltipPlacement?: TooltipProps["placement"]
  icon?: IconNameType
  iconProps?: Omit<IconProps, "name">
  onClick: (row: R) => void
  condition?: boolean
  disabled?: boolean
  color?: IconButtonProps["color"]
  size?: IconButtonProps["size"]
  renderContent?: JSX.Element
  "data-testid"?: string
}

export const DatagridAction: React.FC<DatagridActionProps> = ({
  onClick,
  condition = true,
  renderContent,
  icon,
  iconProps,
  "data-testid": dataTestid = "datagrid-action-button",
  ...props
}) => {
  return (
    condition &&
    (renderContent
      ? renderContent
      : icon && (
          <IconButton
            size="small"
            color="inherit"
            icon={icon}
            iconProps={iconProps}
            {...props}
            onClick={onClick}
            data-testid={dataTestid}
          />
        ))
  )
}
