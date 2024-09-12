import { useRef, useState } from "react"

import { Typography } from "@mui/material"

import { IconButton } from "../../../components/IconButton/IconButton"
import { PopperProps } from "../../../components/Popper/Popper"
import { theme } from "../../../themes"
import { DrawerHeader } from "../DrawerHeader/DrawerHeader"
import { InfoPopperStyled } from "./DrawerHeaderTemplate.styles"

interface InfoPopperProps extends Partial<PopperProps> {}

export interface DrawerHeaderTemplateProps {
  pageTitle: string
  title: string | JSX.Element
  description: string
  showInfoButton?: boolean
  infoPopperProps?: InfoPopperProps | null
  infoPopperContent?: React.ReactNode | string
}

export const DrawerHeaderTemplate: React.FC<DrawerHeaderTemplateProps> = ({
  pageTitle,
  title,
  description,
  infoPopperContent,
  infoPopperProps = {},
  showInfoButton = false,
}) => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleClickButton = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const renderInfoButton = () => (
    <>
      <div
        ref={anchorRef}
        style={{ width: "fit-content", height: "fit-content" }}
      >
        <IconButton
          icon="info"
          size="small"
          variant="text"
          disableRipple
          color="inherit"
          onClick={handleClickButton}
        />
      </div>
      <InfoPopperStyled
        arrow
        transition
        open={open}
        id="info-popper"
        placement="bottom-end"
        anchorEl={anchorRef.current}
        transitionProps={{
          in: open,
          timeoutTransition: 500,
          unmountOnExit: true,
        }}
        flip={{ enabled: true }}
        preventOverflow={{
          enabled: false,
          altAxis: true,
          altBoundary: true,
          tether: true,
          rootBoundary: "document",
        }}
        onBlur={handleClickButton}
        {...infoPopperProps}
      >
        {infoPopperContent}
      </InfoPopperStyled>
    </>
  )

  return (
    <DrawerHeader>
      <Typography
        variant="subtitle2"
        sx={{ color: theme.palette.text.placeholder }}
        fontSize="12px"
        fontWeight="400"
      >
        {pageTitle}
      </Typography>
      <Typography
        fontWeight="bold"
        fontSize="16px"
        component="div"
        mt={"8px"}
        sx={{ display: "flex", alignItems: "center", mb: "0px" }}
        gutterBottom
      >
        {title}
        {showInfoButton && renderInfoButton()}
      </Typography>
      <Typography component="p" variant="caption" fontSize="14px" mt={"16px"}>
        {description}
      </Typography>
    </DrawerHeader>
  )
}
