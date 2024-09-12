import { useMemo } from "react"

import ReactECharts, { EChartsOption } from "echarts-for-react"

import { Box, Typography, TypographyProps } from "@mui/material"

import { CircularProgress } from "../Loadings/CircularProgress/CircularProgress"
import { Container, Legend as LegendStyled } from "./DoughnutPieChart.styles"

export interface DataDoughtnutPieChartProps {
  name: string
  color: string
  onClickLegend?: () => void
}

export interface LegendProps extends DataDoughtnutPieChartProps {
  typographyLegendProps?: Omit<TypographyProps, "color">
}

const LegendComponent: React.FC<LegendProps> = ({
  color,
  name,
  onClickLegend,
  typographyLegendProps,
}) => (
  <LegendStyled onClick={onClickLegend} color={color}>
    <Box className="legend-box">
      <span className="legend-dot">●</span>
      <span className="legend-text">
        <Typography {...typographyLegendProps} noWrap>
          {name}
        </Typography>
      </span>
    </Box>
  </LegendStyled>
)

export interface DoughnutPieChartProps {
  children?: React.ReactNode | string
  data?: any[]
  loading?: boolean
  "data-testid"?: string
  options?: Omit<EChartsOption, "series">
  typographyLegendProps?: LegendProps["typographyLegendProps"]
}

export const DoughnutPieChart: React.FC<DoughnutPieChartProps> = ({
  children,
  data = [],
  options = {},
  loading = false,
  typographyLegendProps = {},
  "data-testid": dataTestid = "doughnut-pie-chart",
}) => {
  const DefaultTypographyLegendProps: DoughnutPieChartProps["typographyLegendProps"] =
    {
      fontSize: ".875rem",
      ...typographyLegendProps,
    }

  const [legends, colors] = useMemo(() => {
    const colorsElements: string[] = []
    const legendsElements: JSX.Element[] = []
    if (data.length > 0) {
      data.forEach((item: DataDoughtnutPieChartProps) => {
        colorsElements.push(item.color)
        legendsElements.push(
          <LegendComponent
            key={item.name}
            name={item.name}
            color={item.color}
            onClickLegend={item.onClickLegend}
            typographyLegendProps={DefaultTypographyLegendProps}
          />
        )
      })
    }
    return [legendsElements, colorsElements]
  }, [data])

  return (
    <>
      <Container data-testid={dataTestid} loading={loading}>
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
        <div className="chart">
          <ReactECharts
            lazyUpdate
            opts={{
              width: 220,
              height: 225,
            }}
            style={{
              height: "auto",
            }}
            option={{
              ...options,
              responsive: true,
              maintainAspectRatio: false,
              tooltip: {
                show: false,
              },
              legend: {
                show: false,
              },
              textStyle: {
                fontFamily: "Red Hat Display",
              },
              series: [
                {
                  data,
                  color: colors,
                  name: "Lorem Ipsum",
                  type: "pie",
                  startAngle: -180,
                  radius: ["62%", "90%"],
                  radiusAxis: {
                    axisLabel: {
                      rotate: 90,
                    },
                  },
                  itemStyle: {
                    normal: {
                      borderRadius: 6,
                      borderColor: "#fff",
                      borderWidth: 2,
                    },
                  },
                  label: {
                    position: "inner",
                    fontSize: "12px",
                    color: "#FFF",
                    fontWeight: 700,
                    formatter: "{c}",
                  },
                },
              ],
            }}
          />
          <div className="legends">{legends.length > 0 && legends}</div>
          {children}
        </div>
      </Container>
    </>
  )
}
