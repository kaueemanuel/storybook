import React from "react"

import { TimelineProps as TimelinePropsComponent } from "primereact/timeline"

import { TimelineStyled } from "./Timeline.styles"
import { TimelineEmpty } from "./TimelineEmpty/TimelineEmpty"

export interface TimelineConnectorProps {
  color?: React.CSSProperties["color"]
  weight?: React.CSSProperties["width"]
}

export interface TimelineProps
  extends Omit<TimelinePropsComponent, "align" | "color" | "children"> {
  connectorProps?: TimelineConnectorProps
  align?: "left" | "right" | "alternate"
  hideEmptyValueLogo?: boolean
}

export const Timeline: React.FC<TimelineProps> = ({
  value,
  align = "left",
  connectorProps,
  hideEmptyValueLogo = false,
  ...props
}): React.ReactNode => {
  const defaultConnectorProps = {
    connectorWeight: connectorProps?.weight ?? "1px",
    connectorColor: connectorProps?.color ?? "#E9EFF2",
  }

  if (!hideEmptyValueLogo && (!value || !value.length)) {
    return <TimelineEmpty />
  }

  return (
    <TimelineStyled
      {...props}
      {...defaultConnectorProps}
      value={value}
      align={align}
      className="timeline-box-content"
    />
  )
}
