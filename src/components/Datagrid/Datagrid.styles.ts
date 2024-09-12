import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { alpha } from "@mui/material"

import { theme } from "../../themes"
import { DatagridExpandable as DatagridExpandableType } from "./Types/DatagridExpandable"
import { DatagridSelectedRow as DatagridSelectedRowType } from "./Types/DatagridSelectedRow"

interface ContainerProps {
  contentMaxHeight: string
  isEmpty: boolean
  loading: boolean
  bgColorRow?: string
  borderColor?: string
  expandableProps?: DatagridExpandableType
  selectedRowProps?: DatagridSelectedRowType
}

export const Container = styled("div", {
  shouldForwardProp: (propName: string) =>
    ![
      "loading",
      "isEmpty",
      "contentMaxHeight",
      "expandableProps",
      "selectedRowProps",
    ].includes(propName),
})<ContainerProps>`
  /* 
  Para usar Media query basta usar da forma abaixo, passando a estilização que será aplicada à condição da media query
  ${() => theme.breakpoints.up("sm")} {
    background-color: ${theme.palette.border["actived-bg"]} !important;
  } */

  position: relative;

  .MuiDataGrid-columnHeader {
    &:focus,
    &:focus-within {
      outline: none !important;
      outline-width: 0px !important;
      outline-offset: 0px !important;
    }
  }

  .MuiDataGrid-cell {
    display: flex;
    padding: ${theme.spacing(2)};
    align-items: center;
    gap: ${theme.spacing(1)};
    flex: 1 0 0;
    align-self: stretch;
    font-family: "Red Hat Display";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    &:focus,
    &:focus-within {
      outline: none !important;
      outline-width: 0px !important;
      outline-offset: 0px !important;
    }
  }

  .MuiDataGrid-root {
    border: none !important;
    padding-bottom: ${({ isEmpty, loading }) =>
      isEmpty && loading ? theme.spacing(12) : "0px"};
  }

  ${({ loading }) =>
    loading &&
    css`
      .MuiDataGrid-columnHeaderTitleContainerContent > .MuiCheckbox-root {
        display: none;
      }
    `}

  .MuiDataGrid-columnHeaderTitleContainerContent {
    font-family: "Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
  }

  .MuiDataGrid-columnHeaders {
    border: none !important;
  }
  .MuiDataGrid-footerContainer {
    border: none !important;
  }

  .MuiDataGrid-virtualScrollerContent {
    box-sizing: border-box;
    height: ${({ isEmpty, loading }) =>
      isEmpty && !loading ? "300px !important" : "100% !important "};
  }
  .MuiDataGrid-virtualScrollerRenderZone {
    box-sizing: border-box !important;
    gap: ${theme.spacing(1)};
    position: relative !important;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100% !important;
    max-height: ${({ contentMaxHeight }) => contentMaxHeight};
  }

  .MuiTablePagination-root {
    display: flex;
    padding: 0 ${theme.spacing(3)};
    align-items: center;
    gap: ${theme.spacing(3)};
    align-self: stretch;
    color: ${theme.palette.text.secondary};
    font-family: "Red Hat Display";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
  }

  .Mui-selected {
    background-color: ${theme.palette.border["actived-bg"]} !important;
    box-shadow: inset 0 0 0 2px ${theme.palette.border.actived} !important;
    border-radius: 0.25rem;
  }

  .MuiDataGrid-row {
    color: ${theme.palette.text.primary};
    border-radius: 0.25rem;
    -webkit-box-shadow: inset 0 0 0 1px ${theme.palette.system.divider};
    -moz-box-shadow: inset 0 0 0 1px ${theme.palette.system.divider};
    box-shadow: inset 0 0 0 1px ${theme.palette.system.divider};
    width: auto !important;
    div.MuiDataGrid-cell {
      border: none;
    }
    transition:
      background-color 0.4s ease-in-out,
      border 0.5s ease,
      box-shadow 0.5s ease;
    &[data-expanded="true"],
    &[aria-selected="true"] {
      -webkit-box-shadow: inset 0 0 0 0.125rem
        ${({ expandableProps, selectedRowProps }) =>
          selectedRowProps?.borderColor ??
          expandableProps?.borderColor ??
          theme.palette.primary.light};
      -moz-box-shadow: inset 0 0 0 0.125rem
        ${({ expandableProps, selectedRowProps }) =>
          selectedRowProps?.borderColor ??
          expandableProps?.borderColor ??
          theme.palette.primary.light};
      box-shadow: inset 0 0 0 0.125rem
        ${({ expandableProps, selectedRowProps }) =>
          selectedRowProps?.borderColor ??
          expandableProps?.borderColor ??
          theme.palette.primary.light};

      background-color: ${({ expandableProps, selectedRowProps }) =>
        selectedRowProps?.bgColorRow ??
        expandableProps?.bgColorRow ??
        alpha(
          selectedRowProps?.borderColor ??
            expandableProps?.borderColor ??
            theme.palette.primary.light,
          0.05,
        )};
      &:hover,
      &.Mui-hovered {
        background-color: ${({ expandableProps, selectedRowProps }) =>
          selectedRowProps?.bgColorRow ??
          expandableProps?.bgColorRow ??
          alpha(
            selectedRowProps?.borderColor ??
              expandableProps?.borderColor ??
              theme.palette.primary.light,
            0.05,
          )};
      }
    }

    &[data-expanded="true"] {
      .MuiDataGrid-row--expand-button {
        transform: rotate(90deg);
      }
    }
    &.MuiDataGrid-row[data-expanded="true"] {
      background-color: ${theme.palette.border["actived-bg"]} !important;
      box-shadow: inset 0 0 0 0.125rem ${theme.palette.border.actived} !important;
      border-radius: 0.25rem !important;
    }
  }

  .MuiDataGrid-row--expanded-content {
    opacity: 0;
    min-height: 3.75rem;
    margin-top: -0.25rem;
    transition: opacity 0.4s ease-in-out;
    height: ${({ expandableProps }) => expandableProps?.height};

    &.opened {
      opacity: 1;
    }
  }
`
interface DatagridLoadingProps {
  loadingHeight: number
  loadingBottom: number
}

export const DatagridLoading = styled("div", {
  shouldForwardProp: (propName: string) =>
    !["loadingHeight", "loadingBottom"].includes(propName),
})<DatagridLoadingProps>`
  position: absolute;
  z-index: 1;
  bottom: ${({ loadingBottom }) => `${loadingBottom}px`};
  left: 0;
  width: 100%;
  height: ${({ loadingHeight }) => `${loadingHeight}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DatagridActionContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.palette.icon.action};
`
