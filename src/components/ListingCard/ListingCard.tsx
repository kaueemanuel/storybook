import { ReactNode } from "react"

import {
  Avatar,
  Box,
  CardHeaderProps,
  CardProps,
  Typography,
} from "@mui/material"

import { CardActions } from "../../components/Card/CardActions/CardActions"
import { CardContent } from "../../components/Card/CardContent/CardContent"
import { CardHeader } from "../../components/Card/CardHeader/CardHeader"
import { Chip, ChipProps } from "../../components/Chip/Chip"
import { IconNameType } from "../../components/Icons/IconNameType"
import { theme } from "../../themes"
import { Icon } from "../Icons/Icon"
import { CardContainer } from "./ListingCard.styles"

export interface ListingCardChipProps {
  chipText?: string
  chipBgColor?: string
  chipProps?: Partial<ChipProps>
}

export interface ListingCardProps extends CardProps {
  icon?: IconNameType
  iconColor?: string
  iconBgColor?: string
  chips?: ListingCardChipProps[] | ListingCardChipProps
  title: string
  titleTypographyProps?: CardHeaderProps["titleTypographyProps"]
  description: string | ReactNode
  viewBtn?: JSX.Element
  addBtn?: JSX.Element
  "data-testid"?: string
}

export const ListingCard: React.FC<ListingCardProps> = ({
  title,
  titleTypographyProps = {},
  description,
  icon,
  iconColor = theme.palette.primary.contrastText,
  iconBgColor,
  chips,
  viewBtn,
  addBtn,
  "data-testid": dataTestid = "listing-card",
  ...props
}) => {
  const defaultTitleTypographyProps: CardHeaderProps["titleTypographyProps"] = {
    marginTop: "2px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "black",
    ...titleTypographyProps,
  }

  const ChipElement = () => {
    if (!chips) {
      return null
    }

    if (Array.isArray(chips)) {
      return (
        <Box style={{ display: "flex", gap: "2px" }}>
          {chips.map(({ chipBgColor, chipProps, chipText }, index) => (
            <Chip
              key={`${index}-${chipText}`}
              size="small"
              {...chipProps}
              label={chipText || ""}
              sx={{
                backgroundColor: chipBgColor,
                marginTop: "-1px",
                marginRight: "2px",
                ...chipProps?.sx,
              }}
            />
          ))}
        </Box>
      )
    } else {
      const { chipBgColor, chipProps, chipText } = chips

      return (
        <Chip
          size="small"
          {...chipProps}
          label={chipText || ""}
          sx={{
            backgroundColor: chipBgColor,
            marginTop: "-1px",
            ...chipProps?.sx,
          }}
        />
      )
    }
  }

  return (
    <CardContainer {...props} data-testid={dataTestid}>
      <CardHeader
        className="card-header"
        subheader={title}
        title={chips ? <ChipElement /> : title}
        avatar={
          icon ? (
            <Avatar
              variant="rounded"
              sx={{
                width: 40,
                height: 40,
                border: `1px solid ${theme.palette.system.divider}`,
                color: iconColor,
                bgcolor: iconBgColor || "black",
              }}
            >
              <Icon name={icon} style={{ color: iconColor }} />
            </Avatar>
          ) : undefined
        }
        subheaderTypographyProps={defaultTitleTypographyProps}
      />
      <CardContent className="card-content">
        {typeof description === "string" ? (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        ) : (
          description
        )}
      </CardContent>
      <CardActions className="card-actions">
        {viewBtn && viewBtn}
        {addBtn && addBtn}
      </CardActions>
    </CardContainer>
  )
}
