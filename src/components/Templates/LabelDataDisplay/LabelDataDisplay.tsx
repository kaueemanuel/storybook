import React, { ReactNode } from "react"

import { Box, Typography, TypographyProps } from "@mui/material"

import { Icon, IconProps } from "../../Icons/Icon"
import { IconNameType } from "../../Icons/IconNameType"
import { Container } from "./LabelDataDisplay.styles"

export interface LabelDataDisplayProps {
  title: string
  content: string | JSX.Element | ReactNode
  icon: IconNameType
  iconProps?: IconProps
  titleProps?: TypographyProps
  iconPlacement?: "start" | "center" | "end"
}

export const LabelDataDisplay: React.FC<LabelDataDisplayProps> = ({
  iconPlacement = "center",
  icon,
  iconProps,
  content,
  title,
  titleProps,
}) => {
  return (
    <Container>
      <Box display="flex" alignItems={iconPlacement}>
        <Icon name={icon} {...iconProps} />
      </Box>
      <Box width="100%">
        <Typography variant="body2" marginTop="2px" {...titleProps}>
          {title}
        </Typography>
        <Box fontWeight={600} fontSize="14px" lineHeight="16px" marginTop="8px">
          {content}
        </Box>
      </Box>
    </Container>
  )
}
