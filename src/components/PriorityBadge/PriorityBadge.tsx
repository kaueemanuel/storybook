import React from "react"

import { Tooltip, Typography } from "@mui/material"

import { Icon } from "../Icons/Icon"
import { IconNameType } from "../Icons/IconNameType"
import { Container } from "./PriorityBadge.styles"

export interface PriorityBadgeProps {
  priority: {
    id: number
    description: string
  }
  compacted?: boolean
  "data-testid"?: string
}

interface PriorityType {
  icon: IconNameType
  backgroundColor: string
  textColor: string
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({
  priority,
  compacted = false,
  "data-testid": dataTestid = "priority-badge",
}) => {
  let data: PriorityType

  switch (priority.id) {
    case 0:
      data = {
        icon: "check_indeterminate_small",
        backgroundColor: "#D6E6F0",
        textColor: "#3A89C1;",
      }
      break
    case 1:
      data = {
        icon: "equal",
        backgroundColor: "#F7F0DD",
        textColor: "#E4B841;",
      }
      break
    case 2:
      data = {
        icon: "keyboard_arrow_up",
        backgroundColor: "#F7E9DB;",
        textColor: "#DD9145;",
      }
      break
    case 3:
      data = {
        icon: "keyboard_double_arrow_up",
        backgroundColor: "#F4E6E4",
        textColor: "#FA7C70",
      }
      break
    default:
      data = {
        icon: "motion_photos_off",
        backgroundColor: "#E9EFF2",
        textColor: "#979797",
      }
      break
  }

  return (
    <Tooltip placement="top" title={compacted ? priority.description : ""}>
      <Container
        textColor={data.textColor}
        backgroundColor={data.backgroundColor}
        compacted={compacted}
        data-testid={dataTestid}
      >
        <Icon name={data.icon} style={{ color: data.textColor }} />
        {!compacted && <Typography>{priority.description}</Typography>}
      </Container>
    </Tooltip>
  )
}
