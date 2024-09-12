/**
 * Verifica se o texto contém HTML
 * @param {string} text
 * @returns `boolean`
 */
export function isHtml(text) {
  const regex = new RegExp(/<\/?[a-z][\s\S]*>/i)
  return regex.test(text)
}
