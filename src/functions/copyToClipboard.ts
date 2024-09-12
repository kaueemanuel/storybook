/**
 * Copia um texto para a área de transferência
 * @param {string} text texto a ser copiado
 */
export function copyToClipboard(text) {
  const el = document.createElement("input")
  el.value = text
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

