import { CardHeaderProps, CardProps, CircularProgress } from "@mui/material"

import { theme } from "../../themes"
import { CardHeader } from "../Card/CardHeader/CardHeader"
import { Icon, IconProps } from "../Icons/Icon"
import { IconNameType } from "../Icons/IconNameType"
import { CardContainer } from "./TabsActionsCard.styles"

export interface TabsActionsCardProps
  extends Omit<CardProps, "title" | "description"> {
  icon?: IconNameType
  iconProps?: Omit<IconProps, "name">
  iconColor?: string
  title: React.ReactNode | string
  titleTypographyProps?: CardHeaderProps["titleTypographyProps"]
  description: React.ReactNode | string
  descriptionTypographyProps?: CardHeaderProps["subheaderTypographyProps"]
  disabled?: boolean
  loading?: boolean
  "data-testid"?: string
}

export const TabsActionsCard: React.FC<TabsActionsCardProps> = ({
  title,
  titleTypographyProps = {},
  description,
  descriptionTypographyProps = {},
  icon,
  iconProps,
  loading = false,
  iconColor = theme.palette.icon.action,
  "data-testid": dataTestid = "tabs-actions",
  ...props
}) => {
  const defaultTitleTypographyProps: CardHeaderProps["titleTypographyProps"] = {
    color: "black",
    marginTop: "2px",
    fontWeight: "500",
    gutterBottom: true,
    fontSize: "0.875rem",
    marginBottom: "8px",
    style: {
      color: theme.palette.text.primary,
    },
    ...titleTypographyProps,
  }

  const defaultSubheaderTypographyProps: CardHeaderProps["subheaderTypographyProps"] =
    {
      color: theme.palette.text.primary,
      ...descriptionTypographyProps,
    }

  return (
    <CardContainer
      {...props}
      iconColor={iconColor}
      data-testid={dataTestid}
      loading={loading}
    >
      <div className="loading">
        <CircularProgress color="primary" />
      </div>
      <CardHeader
        className="card-header"
        title={title}
        subheader={description}
        avatar={
          icon ? (
            <Icon
              name={icon}
              className="icon"
              {...iconProps}
              style={{ ...iconProps?.style, color: iconColor }}
            />
          ) : undefined
        }
        titleTypographyProps={defaultTitleTypographyProps}
        subheaderTypographyProps={defaultSubheaderTypographyProps}
      />
    </CardContainer>
  )
}
