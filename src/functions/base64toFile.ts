/**
 * Transform Base64 to File.
 *
 * @param {string} url - url do arquivo
 * @param {string} filename - nome do arquivo
 * @param {string} mimeType - formato do arquivo
 * @return {File} A new file
 *
 * @example
 *
 * base64toFile('/tmp/file', 'file.png', '.png')
 */
export const base64toFile = (url: string, filename: string, mimeType: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return (
      fetch(url)
        .then(res => res.arrayBuffer())
        .then(buf => new File([buf], filename, { type: mimeType }))
    )
  } catch (e) {
    throw e
  }
}
