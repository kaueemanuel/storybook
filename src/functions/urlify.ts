/**
 * Format blank text in html links
 * @param  {string} text text
 * @returns `string` formatted text
 */
export function urlify(text) {
  if (text == null) { return text }

  // eslint-disable-next-line no-useless-escape
  const re = /((?:href|src)=")?((?<!Link:\s)\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig

  text = text.replace(re, (match, attr) => {
    if (typeof attr !== "undefined") {
      return match
    }
    return `<a target="_blank" href="${ match }">${ match }</a>`
  })

  return text

  // or alternatively
  // const urlRegex = /(?<!href=")https?:\/\/.+?((?=<)|(?=[\s]))/g
  // return replace(text, urlRegex, url => `<a href="${ url }" target="_blank">${ url }</a>`)
  // or alternatively
  // return replace(text, urlRegex, '<a href="$1" target="_blank">$1</a>')
}
