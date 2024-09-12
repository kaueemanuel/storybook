import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

import { RestoreIcon } from "../../../components/Icons/Restore/Restore"
import { theme } from "../../../themes"

const innerCircleGrow = keyframes`
  0% {
    r: 30px;
  }
  15% {
    r: 80px;
  }
  80% {
    r: 80px;
  }
  100% {
    r: 30px;
  }
`

const iconRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-165deg);
  }
  80% {
    transform: rotate(-165deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const SvgIconStyled = styled(RestoreIcon)`
  width: 69px !important;
  height: 69px !important;
  color: ${theme.palette.icon.action};
  margin-bottom: 16px;
  animation: ${iconRotate} 1.4s ease-out 10ms infinite;
  circle {
    animation: ${innerCircleGrow} 1.4s ease-out 10ms infinite;
  }
`
