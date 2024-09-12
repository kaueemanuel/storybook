import { ButtonProps, Tooltip, TooltipProps } from "@mui/material"

import { Icon, IconProps } from "../../components/Icons/Icon"
import { IconNameType } from "../../components/Icons/IconNameType"
import { theme } from "../../themes"
import {
  IconButton as IconButtonStyled,
  IconButtonSquared as IconButtonSquaredStyled,
} from "./IconButton.styles"

type OmittedProps = "startIcon" | "endIcon" | "component" | "disableElevation"

export interface IconButtonProps extends Omit<ButtonProps, OmittedProps> {
  icon: IconNameType
  iconProps?: Omit<IconProps, "name">
  tooltip?: string
  tooltipPlacement?: TooltipProps["placement"]
  tooltipProps?: Omit<TooltipProps, "title" | "placement" | "children">
  squared?: boolean
  variant?: ButtonProps["variant"]
  "data-testid"?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconProps,
  tooltip,
  squared,
  size = "medium",
  tooltipProps,
  tooltipPlacement = "top",
  "data-testid": dataTestid = "icon-button",
  color = "inherit",
  ...props
}) => {
  const Button = squared ? IconButtonSquaredStyled : IconButtonStyled

  const IconProps: Omit<IconProps, "name"> = {
    style: {
      color: color === "inherit" ? theme.palette.icon.action : undefined,
      ...iconProps?.style,
    },
    ...iconProps,
  }

  const content = (
    <Button {...props} color={color} data-testid={dataTestid}>
      {icon && <Icon name={icon} {...IconProps} fontSize={size} />}
    </Button>
  )

  return tooltip ? (
    <Tooltip {...tooltipProps} title={tooltip} placement={tooltipPlacement}>
      {content}
    </Tooltip>
  ) : (
    content
  )
}
