import {
  CircularProgressProps as MUICircularProgressProps,
  CircularProgress as MUICircularProgress,
} from "@mui/material"

import { isMaterialUIVariant } from "../../../functions/isMaterialUIVariant"

export interface CircularProgressProps
  extends Omit<MUICircularProgressProps, "color"> {
  color?: MUICircularProgressProps["color"] | string
  "data-testid"?: string
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  color,
  "data-testid": dataTestid = "circular-progress",
  ...props
}) => {
  if (color && isMaterialUIVariant(color)) {
    return (
      <MUICircularProgress color={color} {...props} data-testid={dataTestid} />
    )
  }
  if (!color) {
    return <MUICircularProgress {...props} data-testid={dataTestid} />
  }
  return (
    <MUICircularProgress
      style={{ color: color }}
      {...props}
      data-testid={dataTestid}
    />
  )
}
