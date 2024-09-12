import replace from "lodash/replace"
import trim from "lodash/trim"

/**
 * Convert a value decimal to money with currency.
 *
 * @param {number} parameter - the number for format
 * @param {boolean} removeCurrencyText - remove currency text (R$)
 * @return {string} A formatted number
 *
 * @example
 *
 * formatMoney(333.33) => R$ 333,33 or 333,33
 */
export const formatMoney = (parameter, removeCurrencyText = false) => {
  let valueFormatted = new Intl.NumberFormat(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  ).format(parameter)

  if (removeCurrencyText) {
    valueFormatted = trim(replace(valueFormatted, "R$", ""))
  }

  return valueFormatted
}
