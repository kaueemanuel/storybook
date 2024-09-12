import styled from "@emotion/styled"

import { theme } from "../../themes"

export const Container = styled.div`
  .MuiTextField-root {
    display: flex;
    height: 2.3125rem;
    padding: 0 ${theme.spacing(2)};
    align-items: center;
    gap: ${theme.spacing(2)};
    align-self: stretch;
    > div {
      height: 2.3125rem;
      padding: 0px 12px 0px 8px !important;

      button {
        margin-left: 8px !important;
        margin-right: 4px !important;
      }
      input {
        color: var(--placeholder_color, rgba(74, 74, 74, 0.5));
        font-feature-settings:
          "liga" off,
          "clig" off;
        font-family: "Red Hat Display";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.01563rem;
      }
    }
  }
`
