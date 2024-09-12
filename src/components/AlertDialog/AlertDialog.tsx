import { CSSProperties, LegacyRef } from "react"

import {
  DialogTitleProps,
  DialogActionsProps,
  DialogContentProps as DialogContentPropsMUI,
  Box,
  Tooltip,
} from "@mui/material"

import { TrashBinAnimation } from "../../animations"
import WarningDialogIconGif from "../../assets/warning_dialog_icon.gif"
import { Icon, IconProps } from "../../components/Icons/Icon"
import { IconNameType } from "../../components/Icons/IconNameType"
import { DialogActions } from "../../providers/dialog/DialogActions/DialogActions"
import { DialogTitle } from "../../providers/dialog/DialogTitle/DialogTitle"
import { theme } from "../../themes"
import { IconButton } from "../IconButton/IconButton"
import { AlertContainer, DialogContentStyled } from "./AlertDialog.styles"

interface DialogContentProps extends Omit<DialogContentPropsMUI, "children"> {
  dividerTop?: boolean
  dividerBottom?: boolean
}

export type AlertDialogTypeType = "warning" | "delete"

export interface AlertDialogProps {
  closeBtn?: () => void
  closeBtnTooltip?: string
  title: string
  description: React.ReactNode | string
  icon?: IconNameType | JSX.Element
  iconProps?: Omit<IconProps, "name">
  iconColor?: string
  titleProps?: DialogTitleProps
  cancelBtn?: JSX.Element
  confirmBtn?: JSX.Element
  contentProps?: DialogContentProps
  actionsProps?: DialogActionsProps
  "data-testid"?: string
  ref?: LegacyRef<HTMLDivElement> | undefined
  id?: string
  style?: CSSProperties
  type?: AlertDialogTypeType
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  description,
  closeBtn,
  closeBtnTooltip,
  cancelBtn,
  confirmBtn,
  icon,
  iconColor = theme.palette.icon.action,
  iconProps,
  titleProps = {},
  contentProps = {},
  actionsProps = {},
  "data-testid": dataTestid = "alert-dialiog",
  ref,
  id = "alert-dialog-default",
  style,
  type,
}) => {
  const defaultDialogTitleProps: DialogTitleProps = {
    ...titleProps,
    sx: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "20px",
      padding: "10px 16px",
      flex: "auto",
      ...titleProps.sx,
    },
  }

  const defaultDialogActionsProps: DialogActionsProps = {
    ...actionsProps,
    sx: {
      gap: "16px",
      letterSpacing: "0.15px",
      padding: "24px",
      paddingTop: "0px",
      justifyContent: "flex-start",
      ...actionsProps.sx,
    },
  }

  let IconRender
  if (type) {
    switch (type) {
      case "warning":
        IconRender = (
          <img
            src={WarningDialogIconGif}
            width={90}
            height={90}
            style={{ marginBottom: "22px" }}
          />
        )
        break
      case "delete":
        IconRender = (
          <TrashBinAnimation
            style={{ width: "auto", height: 80, marginBottom: "22px" }}
          />
        )
        break
      default:
        break
    }
  } else if (icon && typeof icon === "string") {
    IconRender = (
      <Icon
        name={icon}
        className="icon-content"
        size={50}
        style={{ color: iconColor }}
        {...iconProps}
      />
    )
  } else {
    IconRender = icon
  }

  return (
    <AlertContainer data-testid={dataTestid} ref={ref} id={id} style={style}>
      <Box
        display={"flex"}
        justifyContent={title ? "space-between" : "end"}
        alignItems={"normal"}
        minHeight={"48px"}
      >
        {title && (
          <DialogTitle {...defaultDialogTitleProps}>{title}</DialogTitle>
        )}
        {closeBtn && (
          <Tooltip title={closeBtnTooltip} placement="top">
            <Box
              sx={{
                marginRight: "10px",
                marginTop: "5px",
                justifySelf: "baseline",
              }}
            >
              <IconButton
                icon="close"
                id="dialog-close-button"
                onClick={closeBtn}
              />
            </Box>
          </Tooltip>
        )}
      </Box>
      <DialogContentStyled
        dividerTop={title || closeBtn ? true : false}
        {...contentProps}
        style={{ minWidth: 587, ...contentProps.style }}
      >
        {IconRender}
        <div style={{ textAlign: "center" }}>{description}</div>
      </DialogContentStyled>
      <DialogActions {...defaultDialogActionsProps}>
        {!!cancelBtn && cancelBtn}
        {!!confirmBtn && confirmBtn}
      </DialogActions>
    </AlertContainer>
  )
}
