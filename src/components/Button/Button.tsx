import { ButtonProps as ButtonPropsMUI } from "@mui/material"

import { CircularProgress } from "../../components/Loadings/CircularProgress/CircularProgress"
import { theme } from "../../themes"
import { Button as ButtonStyled } from "./Button.styles"

export interface ButtonProps extends ButtonPropsMUI {
  children?: React.ReactNode | string
  loading?: boolean
  "data-testid"?: string
}

export const Button: React.FC<ButtonProps> = ({
  children = "button",
  loading,
  ...props
}) => {
  let size = "22.25px!important"
  if (props?.size && props.size === "small") {
    size = "20.25px !important"
  } else if (props?.size && props.size === "large") {
    size = "26.25px !important"
  }
  return (
    <ButtonStyled
      {...props}
      disabled={loading || props.disabled}
      data-testid={props?.["data-testid"] || "button"}
    >
      {loading && (
        <CircularProgress
          sx={{
            height: size,
            width: size,
            position: "absolute",
            color: theme.palette.grey[500],
          }}
          color={props.variant}
        />
      )}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        {children}
      </div>
    </ButtonStyled>
  )
}
