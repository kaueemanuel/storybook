import { isEmpty, last, split } from "lodash"

/**
 * Pega a extensão do arquivo
 * @param {string} filename caminho ou nome do arquivo
 * @returns `string` extensão do arquivo
 */
export function getFileExtension(filename = "") {
  if (isEmpty(filename)) {
    return null
  }

  return `.${ last(split(filename, ".")) }`
}
