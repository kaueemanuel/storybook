import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { theme } from "../../themes"

interface ContainerProps {
  error?: boolean
  disabled?: boolean
}

export const Container = styled.div<ContainerProps>`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.4px;
  margin-top: 4px;
  color: ${theme.palette.text.primary};
  opacity: ${({ disabled }) => (disabled ? "0.35" : "1")};

  ${({ error }) =>
    error &&
    css`
      color: ${theme.palette.error.main} !important;
    `}
`
