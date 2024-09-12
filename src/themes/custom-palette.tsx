import {
  Palette as MUIPalette,
  PaletteOptions as MUIPaletteOptions,
  TypeText as MUITypeText,
} from "@mui/material"

const accentColorDefault = "#9CB1C8"
interface AccentColorsModules {
  main: string
  billing: string
  businessUnit: string
  crm: string
  financial: string
  finee: string
  fiscal: string
  innovation: string
  ispTelecom: string
  materials: string
  projects: string
  sales: string
  serviceDesk: string
  strategy: string
  suite: string
  support: string
}

interface IconColors {
  info: string
  action: string
  secondary: string
  yellow: string
}
interface SurfaceColors {
  surface1: string
  surface2: string
  surface3: string
}

interface BorderColors {
  actived: string
  "actived-bg": string
}
interface SystemColors {
  "blue-800": string
  "blue-600": string
  "blue-400": string
  "blue-200": string
  error: string
  divider: string
  tooltip: string
}

interface AlertsColors {
  blue: string
  "blue-bg": string
  grey: string
  "grey-bg": string
  green: string
  "green-bg": string
  red: string
  "red-bg": string
  yellow: string
  "yellow-bg": string
}

interface BadgeColors {
  blue: string
  green: string
  red: string
  yellow: string
  orange: string
}

export const iconColors: IconColors = {
  info: "#979797",
  action: "#9CB1C8",
  secondary: "rgba(0, 0, 0, 0.6)",
  yellow: "#E9C16C",
}

export const borderColors: BorderColors = {
  actived: "#0094EE",
  "actived-bg": "#E6F4FD",
}

export const surfaceColors: SurfaceColors = {
  surface1: "#ffffff",
  surface2: "#F5F5F5",
  surface3: "#EAEAEA",
}

export const systemColors: SystemColors = {
  "blue-200": "#9CB1C8",
  "blue-400": "#BFD8F3",
  "blue-600": "#304A64",
  "blue-800": "#13283C",
  error: "#E9786B",
  divider: "#E9EFF2",
  tooltip: "#2D3135",
}

export const alertsColors: AlertsColors = {
  blue: "#004085",
  "blue-bg": "#CCE5FF",
  grey: "#383D41",
  "grey-bg": "#E2E3E5",
  green: "#155724",
  "green-bg": "#D4EDDA",
  red: "#721C24",
  "red-bg": "#F8D7DA",
  yellow: "#856404",
  "yellow-bg": "#FFF3CD",
}

export const badgeColors: BadgeColors = {
  blue: "#0094EE",
  green: "#155724",
  red: "#E9786B",
  yellow: "#E9C16C",
  orange: "#FF9E5F",
}

export const accentColorsModules: AccentColorsModules = {
  main: accentColorDefault,
  billing: "#006B91",
  businessUnit: "#01BBD0",
  crm: "#E9786B",
  financial: "#005AC6",
  finee: accentColorDefault,
  fiscal: "#0860E7",
  innovation: "#BED330",
  ispTelecom: "#9473E0",
  materials: "#F98D45",
  projects: "#007C64",
  sales: "#4AA9D6",
  serviceDesk: "#6C1FAB",
  strategy: "#7CC250",
  suite: accentColorDefault,
  support: "#FF4535",
}

export const textColors: TypeText = {
  primary: "#4A4A4A",
  secondary: "#666",
  placeholder: "rgba(74, 74, 74, 0.5)",
  disabled: "#9E9E9E",
  inverse: "#ffffff",
  link: "#111727",
  placeholderInput: "rgba(74, 74, 74, 0.5)",
}

export interface TypeText extends MUITypeText {
  placeholder: string
  inverse: string
  link: string
  placeholderInput: string
}

export interface MyPaletteExtensions extends Omit<MUIPalette, "text"> {
  accent: AccentColorsModules
  text: TypeText
  system: SystemColors
  alerts: AlertsColors
  badge: BadgeColors
  surface: SurfaceColors
  icon: IconColors
  border: BorderColors
}
export interface MyPaletteOptionsExtensions
  extends Omit<MUIPaletteOptions, "text"> {
  accent?: AccentColorsModules
  text?: Partial<TypeText>
  alerts?: AlertsColors
  badge?: BadgeColors
  system?: SystemColors
  surface?: SurfaceColors
  icon?: IconColors
  border?: BorderColors
}

export interface PaletteType extends MyPaletteExtensions {}
