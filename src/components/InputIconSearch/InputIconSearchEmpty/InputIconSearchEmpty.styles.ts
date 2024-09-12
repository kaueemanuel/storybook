import styled from "@emotion/styled"

import { theme } from "../../../themes"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 412px;
  gap: 6px;

  p,
  span {
    color: ${theme.palette.text.primary} !important;
    font-family: "Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif !important;
  }

  .MuiTypography-root {
    width: 1005;
    text-align: center;
  }
`
