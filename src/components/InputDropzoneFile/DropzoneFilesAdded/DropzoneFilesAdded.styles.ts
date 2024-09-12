import styled from "@emotion/styled"
import { List } from "@mui/material"

import { theme } from "../../../themes"

export const FilesAddedBox = styled.aside`
  & .title-files-added {
    padding-top: 30px;
  }
`

export const ListFilesBox = styled(List)`
  & .MuiListItemIcon-root {
    min-width: 0;
    margin-right: 10px;
  }

  & .MuiListItemSecondaryAction-root {
    right: 0;
    & .MuiButtonBase-root {
      color: ${theme.palette.accent.main};
    }
  }
`
