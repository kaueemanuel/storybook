import { DrawerHeaderTemplateProps } from "../../../providers/drawer/DrawerHeaderTemplate/DrawerHeaderTemplate"
import { PopperHeader as PopperHeaderStyled } from "./PopperHeader.styles"

export interface PopperHeaderProps
  extends Omit<
    DrawerHeaderTemplateProps,
    "showInfoButton" | "InfoComponent" | "infoComponentProps"
  > {
  pageTitle: string
  title: string
  description: string
}

export const PopperHeader: React.FC<PopperHeaderProps> = (props) => (
  <PopperHeaderStyled {...props} />
)
