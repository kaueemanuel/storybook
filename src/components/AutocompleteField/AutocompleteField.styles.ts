import { css } from "@emotion/react"
import styled from "@emotion/styled"
import AutocompleteMUI from "@mui/material/Autocomplete"

import { theme } from "../../themes"
import { AutocompleteFieldProps } from "./AutocompleteField"

export const AutocompleteField = styled(AutocompleteMUI)<
  Omit<AutocompleteFieldProps, "onChange">
>`
  div {
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
  }
`
