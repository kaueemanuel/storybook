import logo from "../../../assets/loading_voalle.gif"
import { theme } from "../../../themes"
import { Container } from "./LoadingBrand.styles"

export interface LoadingBrandProps {
  backgroundOpacity?: number
  backgroundColor?: string
  "data-testid"?: string
}

export const LoadingBrand: React.FC<LoadingBrandProps> = ({
  backgroundOpacity = 1,
  backgroundColor = theme.palette.background.default,
  "data-testid": dataTestid = "loading-brand",
}) => {
  return (
    <Container
      backgroundOpacity={backgroundOpacity}
      backgroundColor={backgroundColor}
      data-testid={dataTestid}
    >
      <img src={logo} className="img" />
      <div className="background"></div>
    </Container>
  )
}
