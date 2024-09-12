import React, { useState, useEffect } from "react"

import { theme } from "../../../themes"
import { Icon } from "../../Icons/Icon"
import { CircularProgress } from "../../Loadings/CircularProgress/CircularProgress"
import { PersonInfo } from "../types/PopoverTypes"
import {
  PopoverContainer,
  IconBox,
  DescriptionText,
  LoadingBox,
  PersonItem,
} from "./PersonInfoPopover.styles"

export interface PersonInfoPopoverProps {
  personInfos?: PersonInfo
  onContentLoaded?: () => void // Callback para indicar que o conteúdo foi carregado
}

export const PopoverPersonInfo: React.FC<PersonInfoPopoverProps> = ({
  personInfos,
  onContentLoaded,
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (personInfos) {
      setLoading(false)
      if (onContentLoaded) onContentLoaded()
    }
  }, [personInfos])

  return loading ? (
    <LoadingBox>
      <CircularProgress />
    </LoadingBox>
  ) : (
    <PopoverContainer>
      <PersonItem>
        <IconBox>
          <Icon
            name="badge"
            size={20}
            style={{ color: theme.palette.icon.action }}
          />
        </IconBox>
        <DescriptionText>{personInfos?.crmFunction || "-"}</DescriptionText>
      </PersonItem>
      <PersonItem>
        <IconBox>
          <Icon
            name="mail"
            size={20}
            style={{ color: theme.palette.icon.action }}
          />
        </IconBox>
        <DescriptionText>{personInfos?.mail || "-"}</DescriptionText>
      </PersonItem>
      <PersonItem>
        <IconBox>
          <Icon
            name="phone_android"
            size={20}
            style={{ color: theme.palette.icon.action }}
          />
        </IconBox>
        <DescriptionText>{personInfos?.cellPhone || "-"}</DescriptionText>
      </PersonItem>
      <PersonItem>
        <IconBox>
          <Icon
            name="call"
            size={20}
            style={{ color: theme.palette.icon.action }}
          />
        </IconBox>
        <DescriptionText>{personInfos?.phone || "-"}</DescriptionText>
      </PersonItem>
    </PopoverContainer>
  )
}
