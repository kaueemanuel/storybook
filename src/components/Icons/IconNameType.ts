import { MaterialSymbolProps } from "react-material-symbols"

import { customIcons } from "./CustomIcons"

export type CustomIconNameType = keyof typeof customIcons

export type IconNameType = MaterialSymbolProps["icon"] | CustomIconNameType
