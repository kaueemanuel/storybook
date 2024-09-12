import { Timeline as TimelineComponent } from "primereact/timeline"

import styled from "@emotion/styled"

import { TimelineConnectorProps } from "./Timeline"

export interface TimelineStyledProps {
  connectorColor?: TimelineConnectorProps["color"]
  connectorWeight?: TimelineConnectorProps["weight"]
}

export const TimelineStyled = styled(TimelineComponent, {
  shouldForwardProp: (propName: string) =>
    !["connectorWeight", "connectorColor"].includes(propName),
})<TimelineStyledProps>`
  .p-timeline-event-connector {
    margin-block: 8px;
    width: ${({ connectorWeight }) => connectorWeight};
    background-color: ${({ connectorColor }) => connectorColor};
  }

  &.p-timeline-vertical {
    .p-timeline-event-opposite,
    .p-timeline-event-content {
      padding: 0 8px;
      padding-bottom: 8px;
    }
  }

  &.p-timeline-horizontal {
    .p-timeline-event-opposite,
    .p-timeline-event-content {
      padding: 8px 0;
      padding-right: 8px;
    }
  }

  .p-timeline-event-content {
    width: 100%;
    line-height: normal;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  ${({ align }) =>
    align !== "alternate" &&
    `
    .p-timeline-event-opposite {
      display: none;
    }
  `}
`
