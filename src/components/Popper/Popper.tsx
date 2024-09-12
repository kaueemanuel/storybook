import { useState } from "react"

import {
  Box,
  BoxProps,
  CircularProgress,
  ClickAwayListener,
  Fade,
  FadeProps,
  Paper,
  PaperProps,
  PopperProps as PopperPropsMUI,
} from "@mui/material"

import { Arrow, PopperContainer, Popper as PopperStyled } from "./Popper.styles"

export interface FlipProps {
  enabled: boolean
  altBoundary?: boolean
  rootBoundary?: "document" | "viewport"
}

export interface PreventOverflowProps {
  enabled: boolean
  tether?: boolean
  altAxis?: boolean
  altBoundary?: boolean
  escapeWithReference?: boolean
  rootBoundary?: "document" | "viewport"
}

export interface TransitionPopperProps extends Omit<FadeProps, "children"> {
  timeoutTransition: number
  FadeComponent?: React.ElementType<FadeProps>
}

export interface PopperProps extends Partial<PopperPropsMUI> {
  id: string
  children: React.ReactNode | string
  arrow?: boolean
  flip?: FlipProps
  loading?: boolean
  onBlur?: () => void
  paperProps?: PaperProps
  boxContentProps?: BoxProps
  preventOverflow?: PreventOverflowProps
  transitionProps?: TransitionPopperProps
  "data-testid"?: string
}

export const Popper: React.FC<PopperProps> = ({
  id,
  anchorEl,
  children,
  placement,
  transition,
  keepMounted,
  disablePortal,
  flip,
  paperProps,
  preventOverflow,
  transitionProps,
  open = false,
  arrow = false,
  loading = false,
  onBlur = () => {},
  boxContentProps,
  "data-testid": dataTestid = "popper",
  ...props
}) => {
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)
  const idOpen = open ? id : ""

  const PopperChild = (
    <div className="MuiPopper-container">
      {arrow && (
        <Arrow ref={(ref) => setArrowRef(ref)} className="MuiPopper-arrow" />
      )}
      <Paper variant="elevation" {...paperProps}>
        <PopperContainer loading={loading}>
          <div className="loading">
            <CircularProgress color="primary" />
          </div>
          <Box className="box-popper" {...boxContentProps}>
            {!loading && children}
          </Box>
        </PopperContainer>
      </Paper>
    </div>
  )

  const renderPopperFadeChild = (transitionPopperProps) => {
    let popperFadeProps = { ...transitionPopperProps, timeout: 350 }

    if (transitionProps) {
      const { FadeComponent, timeoutTransition, ...otherTransitionProps } =
        transitionProps

      popperFadeProps = {
        ...popperFadeProps,
        ...otherTransitionProps,
      }

      if (timeoutTransition) {
        popperFadeProps.timeout = timeoutTransition
      }

      if (FadeComponent) {
        return <FadeComponent {...popperFadeProps}>{PopperChild}</FadeComponent>
      }
    }

    return <Fade {...popperFadeProps}>{PopperChild}</Fade>
  }

  return (
    <PopperStyled
      id={idOpen}
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      transition={transition}
      keepMounted={keepMounted}
      disablePortal={disablePortal}
      {...props}
      data-testid={dataTestid}
      modifiers={[
        {
          name: "arrow",
          enabled: arrow,
          options: {
            element: arrowRef,
          },
        },
        {
          name: "flip",
          enabled: flip?.enabled,
          options: {
            padding: 8,
            ...flip,
          },
        },
        {
          name: "preventOverflow",
          enabled: preventOverflow?.enabled,
          options: {
            padding: 8,
            ...preventOverflow,
          },
        },
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 8],
          },
        },
      ]}
    >
      {transition ? (
        ({ TransitionProps }) => (
          <ClickAwayListener onClickAway={onBlur}>
            {renderPopperFadeChild(TransitionProps)}
          </ClickAwayListener>
        )
      ) : (
        <ClickAwayListener onClickAway={onBlur}>
          {PopperChild}
        </ClickAwayListener>
      )}
    </PopperStyled>
  )
}
