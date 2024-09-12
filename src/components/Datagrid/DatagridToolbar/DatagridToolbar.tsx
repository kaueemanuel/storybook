import { Box, BoxProps } from "@mui/material"

export interface DatagridToolbarProps extends BoxProps {
  children?: React.ReactNode | string
  "data-testid"?: string
}

export const DatagridToolbar: React.FC<DatagridToolbarProps> = ({
  children,
  "data-testid": dataTestid = "datagrid-toolbar",
  ...props
}) => {
  return (
    <Box display={"flex"} {...props} data-testid={dataTestid}>
      {children}
    </Box>
  )
}
