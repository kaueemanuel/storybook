import { isEmpty, replace, size } from "lodash"

/**
 * Formata um número de celular
 * @param {string} number número do telefone
 * @param {boolean} withDdd com DDD
 * @returns `string` telefone|celular formatado
 */
export const formatPhoneNumber = (number, withDdd = true) => {
  const newNumber = replace(number, /[^\d]/g, "")
  const sizeNumber = size(newNumber)

  switch (sizeNumber) {
    case 2:
      return `(${ newNumber })`
    case 8:
      if (withDdd) {
        return replace(newNumber, /(\d{2})(\d{4})(\d{2})/, "($1) $2-$3")
      }
      return replace(newNumber, /(\d{4})(\d{4})/, "$1-$2")
    case 9:
      if (withDdd) {
        return replace(newNumber, /(\d{2})(\d{4})(\d{3})/, "($1) $2-$3")
      }
      return replace(newNumber, /(\d{5})(\d{4})/, "$1-$2")
    case 10:
      return replace(newNumber, /(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
    case 11:
      return replace(newNumber, /(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    // Números fixos com DDD e código do país
    case 12:
      return replace(newNumber, /(\d{2})(\d{2})(\d{4})(\d{4})/, "($2) $3-$4")
    // Celular com 9 extra, DDD e código do país
    case 13:
      return replace(newNumber, /(\d{2})(\d{2})(\d{5})(\d{4})/, "($2) $3-$4")
    default:
      return !isEmpty(number) ? number : "-"
  }
}
