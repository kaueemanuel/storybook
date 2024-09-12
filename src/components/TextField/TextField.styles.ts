import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { alpha } from "@mui/material"
import TextFieldMUI from "@mui/material/TextField"

import { theme } from "../../themes"

export const TextFieldStyled = styled(TextFieldMUI)`
  > div {
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
      &::placeholder {
        color: ${alpha(theme.palette.text.primary, 0.5)};
        opacity: 1;
      }
      &::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: ${alpha(theme.palette.text.primary, 0.5)};
        opacity: 1;
      }

      &:disabled {
        -webkit-text-fill-color: #888888 !important; /* Altera a cor do texto no input desabilitado */
        opacity: 1; /* Mantém a opacidade */
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
