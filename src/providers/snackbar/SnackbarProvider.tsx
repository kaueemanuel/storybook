import {
  SnackbarProvider as NSnackbarProvider,
  SnackbarProviderProps,
} from "notistack"

import { Icon } from "../../components/Icons/Icon"
import { StyledMaterialDesignContent } from "./SnackbarContainer.styles"

export const SnackbarProvider = ({ ...props }: SnackbarProviderProps) => {
  return (
    <NSnackbarProvider
      iconVariant={{
        success: <Icon name="check_circle" style={{ marginRight: "8px" }} />,
        error: <Icon name="highlight_off" style={{ marginRight: "8px" }} />,
        warning: <Icon name="report_problem" style={{ marginRight: "8px" }} />,
        info: <Icon name="info" style={{ marginRight: "8px" }} />,
      }}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
        default: StyledMaterialDesignContent,
      }}
      {...props}
    />
  )
}
