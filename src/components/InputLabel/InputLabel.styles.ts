import styled from "@emotion/styled"
import AutocompleteMUI from "@mui/material/Autocomplete"
import InputLabelMUI from "@mui/material/InputLabel"

import { theme } from "../../themes"

export const AutocompleteField = styled(AutocompleteMUI)``

export const InputLabel = styled(InputLabelMUI)`
  transform: none !important;
  font-size: 1rem !important;
  margin-bottom: 8px;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 20px !important; /* 142.857% */
  letter-spacing: 0.25px !important;
  color: ${theme.palette.text.primary};
  display: flex;
  align-items: center;

  &:disabled {
    color: ${theme.palette.text.disabled};
  }
`
