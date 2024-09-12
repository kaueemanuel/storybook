import styled from "@emotion/styled"
import { Box } from "@mui/material"

import { theme } from "../../../themes"

interface ContainerProps {
  error: boolean
  loading: boolean
  disabled: boolean
}

export const DropzoneBox = styled(Box, {
  shouldForwardProp: (propName: string) =>
    !["error", "loading", "disabled"].includes(propName),
})<ContainerProps>`
  cursor: ${({ disabled }) => !disabled && "pointer"};
  border: 1px dashed;
  border-color: ${({ error }) =>
    error ? theme.palette.error.light : theme.palette.grey[500]};
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 3px;
  transition: 0.5s;
  opacity: ${({ loading }) => (loading ? "0.6" : "1")};

  .icon-cloud {
    color: ${theme.palette.accent.main};
  }

  .loading {
    position: absolute;
    visibility: ${({ loading }) => (loading ? "visible" : "hidden")};
    z-index: 2;
    margin-top: -8px;
  }
`
