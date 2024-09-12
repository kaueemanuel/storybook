import {
  Avatar,
  AvatarProps,
  Stack,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from "@mui/material"

import { userAvatarByName } from "../../../functions/userAvatarByName"

export interface UserNameAvatarProps {
  userName: string
  avatarUrl?: string
  avatarProps?: Omit<AvatarProps, "src">
  tooltip?: string
  tooltipPlacement?: TooltipProps["placement"]
  tooltipProps?: Omit<TooltipProps, "title" | "placement" | "children">
  typographyProps?: TypographyProps
  "data-testid"?: string
}

export const UserNameAvatar: React.FC<UserNameAvatarProps> = ({
  userName,
  avatarProps,
  tooltip,
  tooltipProps,
  typographyProps,
  avatarUrl = undefined,
  tooltipPlacement = "top",
  "data-testid": dataTestid = "icon-button",
}) => {
  const content = (
    <Stack
      useFlexGap
      spacing={1}
      direction="row"
      alignItems="center"
      data-testid={dataTestid}
    >
      <Avatar
        alt={userName}
        sx={{ width: 24, height: 24, fontSize: "14px", ...avatarProps?.sx }}
        {...avatarProps}
        src={avatarUrl!}
      >
        {!avatarUrl ? userAvatarByName(userName) : undefined}
      </Avatar>
      <Typography
        noWrap
        variant="body2"
        sx={{ maxWidth: 200, ...typographyProps?.sx }}
        {...typographyProps}
      >
        {userName}
      </Typography>
    </Stack>
  )

  return tooltip ? (
    <Tooltip {...tooltipProps} title={tooltip} placement={tooltipPlacement}>
      {content}
    </Tooltip>
  ) : (
    content
  )
}
