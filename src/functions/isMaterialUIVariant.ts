import { CircularProgressProps } from "@mui/material"

export const isMaterialUIVariant = (
  value
): value is CircularProgressProps["color"] => {
  return [
    `primary`,
    `secondary`,
    `error`,
    `info`,
    `success`,
    `warning`,
    `inherit`,
  ].includes(value)
}
