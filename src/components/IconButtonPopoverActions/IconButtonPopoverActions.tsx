import React, { useRef, useState } from "react"

import {
  List,
  ListItemButton,
  ListItemText,
  Popover,
  PopoverProps,
  Tooltip,
  TooltipProps,
  TypographyProps,
} from "@mui/material"

import { Icon, IconProps } from "../../components/Icons/Icon"
import { IconNameType } from "../../components/Icons/IconNameType"
import { theme } from "../../themes"
import { IconButton, IconButtonProps } from "../IconButton/IconButton"
import { ListItemIconStyled } from "./IconButtonPopoverActions.styles"

type OmittedIconButtonProps = "onClick" | "ref"
type OmittedPopoverProps = "id" | "open" | "onClose" | "anchorEl"

export interface ActionPopoverListProps {
  label: string
  onClick: () => void
  iconProps?: Omit<IconProps, "name">
  icon?: IconNameType
  labelProps?: TypographyProps
  disabled?: boolean
  hidden?: boolean
  tooltip?: string
  tooltipPlacement?: TooltipProps["placement"]
}

export interface IconButtonPopoverActionsProps
  extends Omit<IconButtonProps, OmittedIconButtonProps> {
  onOpen?: () => void
  onClose?: () => void
  actions: ActionPopoverListProps[]
  popoverProps?: Omit<PopoverProps, OmittedPopoverProps>
}

export const IconButtonPopoverActions: React.FC<
  IconButtonPopoverActionsProps
> = ({
  icon,
  actions,
  popoverProps,
  onOpen = () => {},
  onClose = () => {},
  "data-testid": dataTestid = "popover-icon-button",
  ...props
}) => {
  const ref = useRef(null)
  const [open, handleOpen] = useState<boolean>(false)

  const toggleOpen = () => {
    handleOpen((prevState) => !prevState)

    if (open) {
      onClose()
      return
    }

    onOpen()
  }

  const defaultLabelProps: TypographyProps = {
    fontWeight: "400",
    fontSize: "0.875rem",
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const popoverPropsAux: any = popoverProps

  const defaultPopoverProps: Omit<PopoverProps, "open"> = {
    ...popoverPropsAux,
    style: {
      height: "100%",
      ...popoverPropsAux?.style,
    },
    slotProps: {
      ...popoverPropsAux?.slotProps,
      paper: {
        ...popoverPropsAux?.slotProps?.paper,
        style: {
          minWidth: "165px",
          maxHeight: "500px",
          overflowY: "hidden",
          boxShadow: `0px 2px 8px 1px ${theme.palette.grey[300]}`,
          ...popoverPropsAux?.slotProps?.paper?.style,
        },
      },
    },
    anchorOrigin: {
      horizontal: "right",
      vertical: "bottom",
      ...popoverProps?.anchorOrigin,
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
      ...popoverProps?.transformOrigin,
    },
  }

  const renderListActions = () =>
    actions.map(
      (
        {
          icon: actionIcon,
          iconProps,
          label,
          labelProps,
          onClick,
          disabled,
          hidden,
          tooltip = "",
          tooltipPlacement = "bottom",
        },
        index,
      ) => {
        return (
          !hidden && (
            <Tooltip
              title={tooltip}
              placement={tooltipPlacement}
              disableInteractive
            >
              <div>
                <ListItemButton
                  disabled={disabled}
                  onClick={() => {
                    toggleOpen()
                    onClick()
                  }}
                  key={`action-grid-${index}`}
                  sx={{
                    padding: "4px",
                  }}
                >
                  {actionIcon && (
                    <ListItemIconStyled>
                      <Icon fontSize="small" {...iconProps} name={actionIcon} />
                    </ListItemIconStyled>
                  )}
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      ...defaultLabelProps,
                      ...labelProps,
                    }}
                  />
                </ListItemButton>
              </div>
            </Tooltip>
          )
        )
      },
    )

  return (
    <div data-testid={dataTestid}>
      <div ref={ref} style={{ width: "fit-content", height: "fit-content" }}>
        <IconButton
          {...props}
          icon={icon}
          onClick={toggleOpen}
          id="popover-iconbutton"
          aria-haspopup="true"
          aria-controls={open ? "popover-iconbutton-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
        />
      </div>
      <Popover
        {...defaultPopoverProps}
        id="popover-iconbutton-menu"
        open={open}
        onClose={toggleOpen}
        anchorEl={ref?.current}
      >
        <List
          disablePadding
          component="nav"
          aria-labelledby="nested-list-subheader"
          sx={{ padding: "8px" }}
        >
          {renderListActions()}
        </List>
      </Popover>
    </div>
  )
}
