import toString from "lodash/toString"

/**
 * Aplica máscara sobre uma string
 * @param {string|number} value valor
 * @param {string} pattern máscara
 * @returns `string` formatada
 * usage => mask('41997899089', '(##) #####-####')
 */
export function mask(value, pattern) {
  let i = 0
  const v = toString(value)

  return pattern.replace(/#/g, () => v[i++] || "")
}
