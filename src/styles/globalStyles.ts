import { css } from "@emotion/react"

import { theme } from "../themes"

// AQUI É COLOCADO AS CONFIGURAÇÕES GLOBAIS DE CSS
const globalStyles = css`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0.248px !important;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0.248px !important;
    background-color: ${theme.palette.surface.surface2} !important;
  }

  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: ${theme.palette.text.link} !important;
    text-decoration: underline;
    font-size: 14px;
    letter-spacing: 0.21px;
  }
`

export default globalStyles
