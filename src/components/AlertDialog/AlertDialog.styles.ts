import styled from "@emotion/styled"

import { DialogContent } from "../../providers/dialog/DialogContent/DialogContent"
import { theme } from "../../themes"

export const AlertContainer = styled.div``

interface DialogContentProps {
  dividerTop?: boolean
  dividerBottom?: boolean
}

export const DialogContentStyled = styled(DialogContent)<DialogContentProps>(
  ({ dividerTop, dividerBottom }: DialogContentProps) => ({
    fontSize: "16px",
    letterSpacing: "0.5px",
    padding: "24px",
    paddingTop: "42px",
    paddingBottom: "40px",
    borderTop: dividerTop ? "1px solid" : "none",
    borderBottom: dividerBottom ? "1px solid" : "none",
    borderColor: dividerTop || dividerBottom ? theme.palette.divider : "unset",
    "& .icon-content": {
      marginBottom: "22px",
    },
  })
)
