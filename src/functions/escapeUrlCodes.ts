/**
 * Busca por um conjunto de caracteres em uma url e substitui
 * esses valores pelos seus respectivos caracteres de escape.
 *
 * @param {string} string
 * @returns {string}
 */
export const escapeUrlCodes = (string) => {
  const codes: any = [
    { " ": "%20" },
    { "@": "%40" },
    { "#": "%23" },
    { "&": "%26" },
    { "$": "%24" },
    { "%": "%25" },
    { "?": "%3F" },
    { "<": "%3C" },
    { ">": "%3E" },
    { "+": "%2B" },
    { "{": "%7B" },
    { "}": "%7D" },
    { "|": "%7C" },
    { "\\": "%5C" },
    { "^": "%5E" },
    { "~": "%7E" },
    { "[": "%5B" },
    { "]": "%5D" },
    { "`": "%60" },
    { ";": "%3B" },
    { "/": "%2F" },
    { ":": "%3A" },
    { "=": "%3D" },
  ]

  return [...string]
    .map(character => (character
      .search(/[\s@#&$%?<>+{}|\\^~[\]´;/:=]/g) > -1
       
      ? character.replace(character, Object.values(codes.find(key => Object.keys(key)[0] === character)))
      : character))
    .join("")
}
