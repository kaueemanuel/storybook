import styled from "@emotion/styled"

import { theme } from "../../../themes"

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  gap: ${theme.spacing(4)};
  height: 3.5625rem;
  border-bottom: 1px solid ${theme.palette.divider};
  padding: 0 ${theme.spacing(2)};
  justify-content: space-between;
`
