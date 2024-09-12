/**
 * Verifica se é uma URL válida
 * @param {string} checkUrl URL
 * @returns `{valid:boolean, url: URL}`
 */
export function isValidUrl(checkUrl) {
  let url

  try {
    url = new URL(checkUrl)
  } catch (e) {
    return {
      valid: false,
      url: null
    }
  }

  return {
    valid: url.protocol === "http:" || url.protocol === "https:",
    url
  }
}
