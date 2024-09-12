import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { alpha } from "@mui/material"
import SelectMUI from "@mui/material/Select"

import { theme } from "../../themes"

export const Select = styled(SelectMUI)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;

  &:hover {
    fieldset {
      border-color: ${theme.palette.text.placeholder} !important;
    }
    input:focus + fieldset {
      border-color: ${({ color }) =>
        !color ? "unset" : theme.palette[color].main} !important;
      ${({ error }) =>
        error &&
        css`
          border-color: ${theme.palette.error.main} !important;
        `}
    }
  }

  input {
    &:disabled {
      &::placeholder {
        color: ${alpha(theme.palette.text.primary, 0.5)};
        opacity: 0.8;
      }
      &::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: ${alpha(theme.palette.text.primary, 0.5)};
        opacity: 0.8;
      }
    }

    &::placeholder {
      color: ${alpha(theme.palette.text.primary, 0.5)};
      opacity: 1;
    }
    &::-ms-input-placeholder {
      /* Edge 12 -18 */
      color: ${alpha(theme.palette.text.primary, 0.5)};
      opacity: 1;
    }
    ${({ size }) =>
      size === "small" &&
      css`
        height: 23px !important;
      `}
    ${({ error }) =>
      error &&
      css`
        color: ${theme.palette.error.main} !important;
      `}
  }

  fieldset {
    border-color: ${alpha(theme.palette.text.placeholder, 0.35)};

    ${({ error }) =>
      error &&
      css`
        border-color: ${theme.palette.error.main} !important;
        color: ${theme.palette.error.main} !important;
      `}
  }

  > p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
    margin-left: 0px;
    color: ${theme.palette.text.primary};

    ${({ error }) =>
      error &&
      css`
        color: ${theme.palette.error.main} !important;
      `}
  }
`
