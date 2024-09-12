import styled from "@emotion/styled"
import { Badge, BadgeProps, Box } from "@mui/material"
import { styled as styledMUI } from "@mui/material/styles"

export const StyledBadge = styledMUI(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 6,
    background: `${theme.palette.error.main}`,
    color: "#fff",
    padding: "0 4px",
  },
}))

export const DatagridFilterHeader = styled(Box)`
  padding: 16px 24px;
  position: sticky;
  top: 0px;
`
export const DatagridFilterFooter = styled(Box)`
  display: flex;
  gap: 16px;
  padding: 24px;
  position: sticky;
  bottom: 0px;
`

export const DatagridFilterContent = styled.div`
  flex: 1;
  padding: 0px 24px;
  padding-bottom: 24px;
  min-width: 350px;
  max-width: 932px;
  overflow-y: auto;
  max-height: 379px;
`
