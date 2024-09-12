import styled from "@emotion/styled"
import { Box } from "@mui/material"

export const BoxContainerStyled = styled(Box)`
  margin-top: 8px;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  u {
    text-decoration: underline;
  }
  s {
    text-decoration: line-through;
  }
  pre {
    color: rgba(0, 0, 0, 0.8);
    white-space: pre-wrap;
    background-color: rgba(191, 191, 191, 0.15);
    font-family: monospace;
  }
  .ql-indent-1 {
    padding-left: 3em;
  }
  .ql-indent-2 {
    padding-left: 6em;
  }
  .ql-indent-3 {
    padding-left: 9em;
  }
  .ql-indent-4 {
    padding-left: 12em;
  }
  .ql-indent-5 {
    padding-left: 15em;
  }
  .ql-indent-6 {
    padding-left: 18em;
  }
  .ql-indent-7 {
    padding-left: 21em;
  }
  .ql-indent-8 {
    padding-left: 24em;
  }
  hr {
    margin: 15px 0;
    height: 4px;
    background: #dedede;
    border: 0;
  }
  figure {
    display: table;
    clear: both;
    text-align: center;
    margin: 1em auto;
    max-width: 100%;
    display: block;
    box-sizing: border-box;
    & img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      min-width: 50px;
    }
    &.image-style-align-left {
      float: left;
      margin-right: 1.5em;
    }
    &.image-style-align-right {
      float: right;
      margin-left: 1.5em;
    }
  }
  li {
    display: list-item;
  }
  li > .ql-ui {
    visibility: hidden;
  }
  ol {
    display: block;
    list-style-type: decimal;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 1px solid;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  table {
    display: table;
    border-collapse: collapse;
    border-spacing: 0px;
    margin: 1em auto;
    td,
    th {
      text-align: left;
      min-width: 2em;
      padding: 0.4em;
      border: 1px solid #bfbfbf;
      vertical-align: middle;
      p {
        margin-bottom: 1rem;
      }
    }
  }
  & table,
  & video,
  & iframe,
  & img {
    width: 100%;
  }

  .wysiwyg-color-black {
    color: black;
  }
  .wysiwyg-color-silver {
    color: silver;
  }
  .wysiwyg-color-gray {
    color: gray;
  }
  .wysiwyg-color-maroon {
    color: maroon;
  }
  .wysiwyg-color-red {
    color: red;
  }
  .wysiwyg-color-purple {
    color: purple;
  }
  .wysiwyg-color-green {
    color: green;
  }
  .wysiwyg-color-olive {
    color: olive;
  }
  .wysiwyg-color-navy {
    color: navy;
  }
  .wysiwyg-color-blue {
    color: blue;
  }
  .wysiwyg-text-align-right {
    text-align: right !important;
  }
  .wysiwyg-text-align-center {
    text-align: center !important;
  }
  .wysiwyg-text-align-left {
    text-align: left !important;
  }
`
