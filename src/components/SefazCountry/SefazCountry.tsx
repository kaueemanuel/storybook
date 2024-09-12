import { useEffect, useMemo } from "react"

import { Typography, TypographyProps } from "@mui/material"

import { CircularProgress } from "../Loadings/CircularProgress/CircularProgress"
import { CountryImage } from "./CountryImage"
import { Container, Legend as LegendStyled } from "./SefazCountry.styles"

export type CountryTypes =
  | "AC"
  | "AL"
  | "AP"
  | "AM"
  | "BA"
  | "CE"
  | "DF"
  | "ES"
  | "GO"
  | "MA"
  | "MT"
  | "MS"
  | "MG"
  | "PA"
  | "PB"
  | "PR"
  | "PE"
  | "PI"
  | "RJ"
  | "RN"
  | "RS"
  | "RO"
  | "RR"
  | "SC"
  | "SP"
  | "SE"
  | "TO"

export type DataSefazCountryType = {
  normal: string
  slow: string
  stopped: string
}

export interface DataSefazCountryInputProps {
  normal: CountryTypes[]
  slow: CountryTypes[]
  stopped: CountryTypes[]
}

export interface LegendProps {
  name: string
  classColor?: string
  onClickLegend: (e: any) => void
  typographyLegendProps?: Omit<TypographyProps, "color">
}

const LegendComponent: React.FC<LegendProps> = ({
  name,
  classColor,
  onClickLegend,
  typographyLegendProps,
}) => (
  <LegendStyled onClick={onClickLegend} className={classColor}>
    <span className="legend-square" />
    <span className="legend-text">
      <Typography {...typographyLegendProps} noWrap>
        {name}
      </Typography>
    </span>
  </LegendStyled>
)

export interface SefazCountryProps {
  data: DataSefazCountryInputProps
  width?: string
  height?: string
  loading?: boolean
  "data-testid"?: string
  style?: React.CSSProperties
  typographyLegendProps?: LegendProps["typographyLegendProps"]
}

export const SefazCountry: React.FC<SefazCountryProps> = ({
  data,
  typographyLegendProps = {},
  "data-testid": dataTestid = "multi-color-linear-progress",
  ...props
}) => {
  const DefaultContainerProps = {
    height: "8px",
    width: "360px",
    ...props,
  }

  const DefaultTypographyLegendProps: SefazCountryProps["typographyLegendProps"] =
    {
      fontSize: ".875rem",
      ...typographyLegendProps,
    }

  const dataLegend: DataSefazCountryType = {
    normal: "Normal",
    slow: "Lento",
    stopped: "Parado",
  }

  const colorCountry = (type) => {
    data[type].forEach((item: string) => {
      const rectImage = document.querySelector(`[data-state="rect-${item}"]`)
      const acronymImage = document.querySelector(
        `[data-state="acronym-${item}"]`
      )
      if (rectImage && acronymImage) {
        if (rectImage.classList.contains(`${type}-color`)) {
          rectImage.classList.remove(`${type}-color`)
          acronymImage.classList.remove(`${type}-color`)
          return
        }

        rectImage.classList.add(`${type}-color`)
        acronymImage.classList.add(`${type}-color`)
      }
    })
  }

  const handleColorsCountry = (type?: string) => {
    if (!type) {
      Object.keys(data).forEach((type: string) => {
        colorCountry(type)
      })
      return
    }

    if (data[type].length) {
      colorCountry(type)
    }
  }

  const legends = useMemo(() => {
    const legendsElements: JSX.Element[] = []
    Object.keys(dataLegend).forEach((item: string, index) => {
      const nameLegend: string = dataLegend[item]

      legendsElements.push(
        <LegendComponent
          name={nameLegend}
          key={`legend-${index}`}
          classColor={`${item}-color`}
          onClickLegend={(e) => {
            handleColorsCountry(item)

            const btn = e.target
            if (btn.classList.contains("hidden")) {
              btn.classList.remove("hidden")
              return
            }

            btn.classList.add("hidden")
          }}
          typographyLegendProps={DefaultTypographyLegendProps}
        />
      )
    })
    return legendsElements
  }, [dataLegend])

  useEffect(() => {
    handleColorsCountry()
  }, [data])

  return (
    <Container data-testid={dataTestid} {...DefaultContainerProps}>
      <div className="loading">
        <CircularProgress color="primary" />
      </div>

      <div className="container-image">
        <CountryImage />
      </div>

      <div className="legends">{legends.length > 0 && legends}</div>
    </Container>
  )
}
