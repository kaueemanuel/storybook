import React from "react"
import { MaterialSymbol, MaterialSymbolProps } from "react-material-symbols"

import { SvgIconProps } from "@mui/material"

import { theme } from "../../themes"
import { customIcons } from "./CustomIcons"
import { IconNameType } from "./IconNameType"

export interface IconProps
  extends Omit<MaterialSymbolProps, "icon">,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.HtmlHTMLAttributes<any> {
  name: IconNameType
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit"
  fontSize?: SvgIconProps["fontSize"]
  "data-testid"?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  color = "inherit",
  size,
  style,
  fontSize,
  "data-testid": dataTestid,
  ...props
}) => {
  if (customIcons?.[name]) {
    const CustomIcon = customIcons[name]
    return (
      <CustomIcon
        color={color}
        style={{
          color: color === "inherit" && theme.palette.icon.info,
          fontSize: size,
          ...style,
        }}
        data-testid={dataTestid || `icon-${name}`}
        fontSize={fontSize}
        {...props}
      />
    )
  }

  const icon = name as MaterialSymbolProps["icon"]
  let fontSizeAux: number = 24
  switch (fontSize) {
    case "small":
      fontSizeAux = 20
      break
    case "large":
      fontSizeAux = 35
      break
    default:
      fontSizeAux = 24
      break
  }
  return (
    <MaterialSymbol
      icon={icon}
      weight={300}
      color={
        color !== "inherit"
          ? theme.palette?.[color].main
          : theme.palette.icon.info
      }
      size={size ? size : undefined}
      style={{
        border: "none",
        paddingBlock: "0",
        paddingInline: "0",
        background: "transparent",
        height: "fit-content",
        padding: "0",
        fontSize: fontSizeAux,
        ...style,
      }}
      data-testid={dataTestid || `icon-${name}`}
      {...props}
    />
  )
}
