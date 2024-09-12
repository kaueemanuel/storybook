/**
 * Format Decimal.
 *
 * @param {number} parameter - número a ser formatado
 * @param {object} options - opções de formatação
 * @return {string} A formatted number
 *
 * @example
 *
 * formatDecimal(123456) => 123.456
 */
export const formatDecimal = (
  parameter: number,
  options: any = { style: "decimal" },
) => new Intl.NumberFormat(navigator.language, options).format(parameter)
