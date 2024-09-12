import { InputSearch, InputSearchProps } from "../InputSearch/InputSearch"
import { Container } from "./DatagridInputSearch.styles"

export interface DatagridInputSearchProps extends InputSearchProps {}

export const DatagridInputSearch: React.FC<DatagridInputSearchProps> = ({
  label = "",
  "data-testid": dataTestid = "datagrid-input-search",
  ...props
}) => {
  return (
    <Container>
      <InputSearch label={label} data-testid={dataTestid} {...props} />
    </Container>
  )
}
