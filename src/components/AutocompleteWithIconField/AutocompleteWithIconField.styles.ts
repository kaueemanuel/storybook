import styled from "@emotion/styled"
import { Autocomplete } from "@mui/material"

import { theme } from "../../themes"
import { AutocompleteWithIconFieldProps } from "./AutocompleteWithIconField"

export const AutocompleteWithIconField = styled(Autocomplete, {
  shouldForwardProp: (propName: string) => !["helperText"].includes(propName),
})<Omit<AutocompleteWithIconFieldProps, "onChange">>`
  div {
    &:hover {
      fieldset {
        border-color: ${({ error }) =>
          !!error
            ? `${theme.palette.system.error} !important`
            : `${theme.palette.icon.secondary} !important`};
      }
    }
  }
`
