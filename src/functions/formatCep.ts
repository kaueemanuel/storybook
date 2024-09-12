import isEmpty from "lodash/isEmpty"
import replace from "lodash/replace"

/**
 * Format CEP.
 *
 * @param {string} cep - postal code
 * @return {string} A formatted CEP
 *
 * @example
 *
 * formatCep('96530000')
 */
export const formatCep = (cep) => {
  if (isEmpty(cep)) {
    return "-"
  }

  cep = replace(cep, /[^\d]/g, "")
  return replace(cep, /(\d{5})(\d{3})/, "$1-$2")
}
