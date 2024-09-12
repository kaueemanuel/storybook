/**
 * Monta um enum
 * @param {string[]} values valores do enum
 * @returns {Object}
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function Enum(values) {
  for (let i = 0; i < values.length; i += 1) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this[values[i]] = i
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return this
}
