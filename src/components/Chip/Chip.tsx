import { ChipProps as ChipPropsMUI, Tooltip, TooltipProps } from "@mui/material"

import { Chip as ChipStyled } from "./Chip.styles"

export interface ChipProps extends ChipPropsMUI {
  label: string
  rounded?: boolean
  tooltip?: string
  tooltipPlacement?: TooltipProps["placement"]
  "data-testid"?: string
}

export const Chip: React.FC<ChipProps> = ({
  rounded = false,
  "data-testid": dataTestid = "chip",
  ...props
}) => {
  const { tooltip, tooltipPlacement } = props
  return tooltip ? (
    <Tooltip title={tooltip} placement={tooltipPlacement}>
      <ChipStyled {...props} rounded={rounded} data-testid={dataTestid} />
    </Tooltip>
  ) : (
    <ChipStyled {...props} rounded={rounded} data-testid={dataTestid} />
  )
}
