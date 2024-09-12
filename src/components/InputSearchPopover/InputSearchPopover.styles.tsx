import { Box, ListItem, ListItemText, Popper, styled } from "@mui/material"

import { theme } from "../../themes"

export const ItemBoxContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  & > p {
    color: ${theme.palette.text.primary}80;
  }
  :hover {
    cursor: pointer;
  }
`

export const CustomListItem = styled(ListItem)`
  color: ${theme.palette.text.primary}80;
`

export const CustomListItemText = styled(ListItemText)`
  & > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

export const PopperContainer = styled(Popper)`
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  background-color: ${theme.palette.background.paper};
  z-index: ${theme.zIndex.modal};
  margin-top: 15px !important;
  border-radius: 4px;
`
