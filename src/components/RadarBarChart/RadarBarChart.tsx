import { useMemo } from "react"

import { EChartsOption } from "echarts-for-react"

import { Box, Typography, TypographyProps } from "@mui/material"

import MyPerformanceVideo from "../../assets/my_performance_video.webm"
import { CircularProgress } from "../Loadings/CircularProgress/CircularProgress"
import { Container, Legend as LegendStyled } from "./RadarBarChart.styles"

/* Will change on V1R2 */

export interface DataRadarBarChartProps {
  time: string
  name: string
  color: string
  value: string | number
  onClickLegend?: () => void
}

export interface LegendProps extends DataRadarBarChartProps {
  typographyLegendProps?: Omit<TypographyProps, "color">
}

const LegendComponent: React.FC<LegendProps> = ({
  color,
  name,
  time,
  value,
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
    <Box className="legend-time-box">
      <Typography className="legend-count" variant="h5">
        {value}
      </Typography>
      <Typography className="legend-hours" variant="subtitle2" noWrap>
        {time}
      </Typography>
    </Box>
  </LegendStyled>
)

export interface RadarBarChartProps {
  children?: React.ReactNode | string
  data: any[]
  loading?: boolean
  "data-testid"?: string
  options?: Omit<EChartsOption, "series">
  typographyLegendProps?: LegendProps["typographyLegendProps"]
}

export const RadarBarChart: React.FC<RadarBarChartProps> = ({
  children,
  data = [],
  // options = {},
  loading = false,
  typographyLegendProps = {},
  "data-testid": dataTestid = "radar-bar-chart",
}) => {
  const DefaultTypographyLegendProps: RadarBarChartProps["typographyLegendProps"] =
    {
      fontSize: ".875rem",
      ...typographyLegendProps,
    }

  const [legends /* , series */] = useMemo(() => {
    // const seriesElements: any[] = []
    const legendsElements: JSX.Element[] = []
    if (data.length > 0) {
      data.forEach((item: DataRadarBarChartProps, index) => {
        legendsElements.push(
          <LegendComponent
            key={`legend-${index}`}
            name={item.name}
            time={item.time}
            color={item.color}
            value={item.value}
            onClickLegend={item.onClickLegend}
            typographyLegendProps={DefaultTypographyLegendProps}
          />
        )
        // seriesElements.push({
        //   type: "bar",
        //   roundCap: true,
        //   showBackground: true,
        //   coordinateSystem: "polar",
        //   label: {
        //     show: false,
        //   },
        //   value: item.value,
        //   color: item.color,
        //   name: item.name,
        //   data: [Number(item.value) / 100],
        //   time: item.time,
        // })
      })
    }
    return [legendsElements /* seriesElements */]
  }, [data])

  return (
    <>
      <Container data-testid={dataTestid} loading={loading}>
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
        <div className="chart">
          <div className="legends">{legends.length > 0 && legends}</div>

          <video
            loop
            muted
            autoPlay
            width="175px"
            no-controls="true"
            src={MyPerformanceVideo}
          />

          {/*
          <ReactECharts
            lazyUpdate
            opts={{
              width: 240,
              height: 280,
            }}
            style={{
              height: "auto",
            }}
            option={{
              ...options,
              series,
              barGap: "150%",
              barCategoryGap: "5%",
              responsive: true,
              maintainAspectRatio: false,
              polar: {
                radius: [30, "240%"],
                center: ["55%", "45%"],
              },
              tooltip: {
                show: false,
              },
              angleAxis: {
                show: false,
                max: 1,
                inverse: true,
                startAngle: 0,
              },
              radiusAxis: {
                show: false,
                data: ["a", "b", "c", "d"],
              },
              textStyle: {
                fontFamily: "Red Hat Display",
              },
            }}
          /> */}
          {children}
        </div>
      </Container>
    </>
  )
}
