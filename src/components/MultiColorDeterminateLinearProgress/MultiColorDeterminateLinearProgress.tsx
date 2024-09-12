import { useMemo } from "react"

import { Typography, TypographyProps } from "@mui/material"

import { CircularProgress } from "../Loadings/CircularProgress/CircularProgress"
import {
  BarColor as BarColorStyled,
  Container,
  Legend as LegendStyled,
} from "./MultiColorDeterminateLinearProgress.styles"

export interface DataMultiColorDeterminateLinearProgressProps {
  name: string
  color: string
  value: string | number
  onClickLegend?: () => void
}

export interface LegendProps
  extends DataMultiColorDeterminateLinearProgressProps {
  typographyLegendProps?: Omit<TypographyProps, "color">
}

const LegendComponent: React.FC<LegendProps> = ({
  color,
  name,
  value,
  onClickLegend,
  typographyLegendProps,
}) => (
  <LegendStyled onClick={onClickLegend} color={color}>
    <span className="legend-dot">●</span>
    <span className="legend-text">
      <Typography {...typographyLegendProps} noWrap>
        {name}
      </Typography>
      <Typography noWrap variant="h5" className="legend-count">
        {value}
      </Typography>
    </span>
  </LegendStyled>
)

export interface MultiColorDeterminateLinearProgressProps {
  data: DataMultiColorDeterminateLinearProgressProps[]
  width?: string
  height?: string
  rounded?: boolean
  loading?: boolean
  fullWidth?: boolean
  showLegend?: boolean
  "data-testid"?: string
  style?: React.CSSProperties
  typographyLegendProps?: LegendProps["typographyLegendProps"]
}

export const MultiColorDeterminateLinearProgress: React.FC<
  MultiColorDeterminateLinearProgressProps
> = ({
  data,
  showLegend = false,
  typographyLegendProps = {},
  "data-testid": dataTestid = "multi-color-linear-progress",
  ...props
}) => {
  const minValueDefault = 0.4
  const DefaultContainerProps = {
    height: "8px",
    width: "360px",
    ...props,
  }

  const DefaultTypographyLegendProps: MultiColorDeterminateLinearProgressProps["typographyLegendProps"] =
    {
      fontSize: ".875rem",
      ...typographyLegendProps,
    }

  const [bars, legends] = useMemo(() => {
    const barsElements: JSX.Element[] = []
    const legendsElements: JSX.Element[] = []
    if (data.length > 0) {
      const values = data.reduce(
        (result, { value }) => result + Number(value) + minValueDefault,
        0
      )

      data.forEach(
        (item: DataMultiColorDeterminateLinearProgressProps, index) => {
          barsElements.push(
            <BarColorStyled
              key={`bar-${index}`}
              className="Multicolor-determinateLinear-bar"
              height={DefaultContainerProps.height}
              color={item.color && item.value ? item.color : undefined}
              width={
                ((Number(item.value) + minValueDefault) * 100) / values + "%"
              }
            />
          )

          legendsElements.push(
            <LegendComponent
              key={`legend-${index}`}
              name={item.name}
              color={item.color}
              value={item.value}
              onClickLegend={item.onClickLegend}
              typographyLegendProps={DefaultTypographyLegendProps}
            />
          )
        }
      )
    }
    return [barsElements, legendsElements]
  }, [data])

  return (
    <Container data-testid={dataTestid} {...DefaultContainerProps}>
      <div className="loading">
        <CircularProgress color="primary" />
      </div>
      <div className="bars">{bars.length > 0 && bars}</div>
      {showLegend && (
        <div className="legends">{legends.length > 0 && legends}</div>
      )}
    </Container>
  )
}
