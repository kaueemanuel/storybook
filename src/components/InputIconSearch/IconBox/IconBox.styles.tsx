import styled from "@emotion/styled"

import { theme } from "../../../themes"

interface IconContainerProps {
  selected: boolean
}

export const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  width: 32px;
  height: 32px;
  box-shadow: inset 0px 0px 0px 2px
    ${({ selected }) => (selected ? "#0094ee" : "transparent")};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 0px 0px 2px
      ${({ selected }) => (selected ? "#0094ee" : theme.palette.text.primary)};
  }

  .icon-selected-badge {
    border-radius: 50%;
    background-color: #0094ee;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 15px;
    height: 15px;
    position: absolute;
    top: -6px;
    right: -6px;
    z-index: 1;
  }
`
