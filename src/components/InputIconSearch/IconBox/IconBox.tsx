import { Collection } from "react-virtualized"

import { Tooltip } from "@mui/material"

import { getFormattedIconName } from "../../../functions/getFormattedIconName"
import { theme } from "../../../themes"
import { Icon } from "../../Icons/Icon"
import { IconNameType } from "../../Icons/IconNameType"
import { IconContainer } from "./IconBox.styles"

const IconBox = ({ filteredIcons, internalValue, handleOnChange }) => {
  const gridColumns = 9

  const getGridPosition = (index) => {
    const x = (index % gridColumns) * 45
    const y = Math.floor(index / gridColumns) * 45 + 8
    return { x, y }
  }

  function cellRenderer({ index, key, style }) {
    const name = filteredIcons[index]
    const selected = name === internalValue
    return (
      <div key={key} style={style}>
        <Tooltip
          title={getFormattedIconName(name)}
          placement="top"
          disableInteractive
        >
          <IconContainer
            key={name}
            selected={selected}
            onClick={(event) => {
              event.preventDefault()
              handleOnChange(name as IconNameType)
            }}
          >
            <Icon
              key={name}
              name={name as IconNameType}
              style={{ color: theme.palette.text.primary }}
            />
            {selected && (
              <div className="icon-selected-badge">
                <Icon
                  name={"check"}
                  style={{ color: theme.palette.surface.surface1 }}
                  size={8}
                />
              </div>
            )}
          </IconContainer>
        </Tooltip>
      </div>
    )
  }

  const cellSizeAndPositionGetter = ({ index }) => {
    const { x, y } = getGridPosition(index)
    const data = {
      height: 32,
      width: 32,
      x,
      y,
    }
    return data
  }

  return (
    filteredIcons.length > 0 && (
      <Collection
        cellCount={filteredIcons.length}
        cellRenderer={cellRenderer}
        cellSizeAndPositionGetter={cellSizeAndPositionGetter}
        width={412}
        height={390}
      />
    )
  )
}

export default IconBox
