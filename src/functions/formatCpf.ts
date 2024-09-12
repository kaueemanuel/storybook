import replace from "lodash/replace"

export const formatCpf = (cpf) => {
  cpf = replace(cpf, /[^\d]/g, "")
  return replace(cpf, /(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}
