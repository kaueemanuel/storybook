import styled from "@emotion/styled"
import { FormControl } from "@mui/material"

import { theme } from "../../themes"

interface ContainerProps {
  rows?: number
  fullWidth?: boolean
  disabled?: boolean
}

export const ContainerHTMLEditor = styled(FormControl, {
  shouldForwardProp: (propName: string) => !["rows"].includes(propName),
})<ContainerProps>`
  .rdw-editor-wrapper {
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
    border-color: ${({ error }) =>
      error ? theme.palette.error.light : "rgba(0, 0, 0, 0.23)"};
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
  }

  .rdw-editor-toolbar {
    border: none;
    padding: 2px;
    margin-bottom: 0;
    background-color: #f9fbfc;
    div {
      margin: 0;
    }
  }

  .rdw-editor-main {
    height: calc(80px * ${({ rows }) => rows});
    padding-inline: 6px;
    background-color: ${theme.palette.common.white};
  }

  .rdw-option-wrapper {
    height: 25px;
    padding: 8px;
    border: none;
    background-color: transparent;
    &:hover {
      box-shadow: none;
      border-radius: 50%;
      background-color: ${theme.palette.grey[200]};
    }
  }

  .rdw-colorpicker-option {
    box-shadow: none;
  }

  .rdw-option-active {
    box-shadow: none;
    border-radius: 50%;
    background-color: ${theme.palette.grey[100]};
  }

  .rdw-dropdown-optionwrapper {
    & .rdw-dropdownoption-default {
      padding: 5px;
    }
  }

  .rdw-dropdown-wrapper,
  .rdw-dropdown-optionwrapper {
    border-radius: 4px;
    &:hover {
      box-shadow: none;
    }
  }

  &.Mui-disabled {
    opacity: 0.8;
    pointer-events: none;

    .rdw-editor-wrapper {
      border-color: #d9d9d9;
    }

    .rdw-editor-main {
      background-color: #d9d9d9;
    }
  }
`
