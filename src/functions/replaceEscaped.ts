import isEmpty from "lodash/isEmpty"

/**
 * Convert escaped text for JSON PARSE
 * @param  {string} str text to replace
 * @param {boolean} isJson True = JSON Object | False = normal text
 * @returns {string} text converted
 */
export const replaceEscaped = (str, isJson) => {
  if (isEmpty(str)) {
    return str
  }

  if (isJson) {
    return str
      .replaceAll("\b", "\\b")
      .replaceAll("\f", "\\f")
      .replaceAll("\n", "\\n")
      .replaceAll("\r", "\\r")
      .replaceAll("\t", "\\t")
  }

  return str
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll('\\"', '\\\\"')
    .replaceAll(String.fromCharCode(39), String.fromCharCode(39))
    .replaceAll('\\\\"', '\\"')
}
