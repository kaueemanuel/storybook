import styled from "@emotion/styled"

import { Card } from "../../components/Card/Card"

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
  height: 100%;

  .card-header,
  .card-content,
  .card-actions {
    padding: 0;
  }

  .card-actions {
    flex: 1;
    display: flex;
    align-items: end;
  }
`