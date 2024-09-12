import isEmpty from "lodash/isEmpty"
import size from "lodash/size"

/**
 * Dada uma string, remove os acentos e retorna o resultado.
 * @param source string alvo
 * @returns {string} sem acentos
 */
function unaccent(source) {
  return source.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

/**
 * Formata um texto com parâmetros
 * @param {string} text texto a formatar
 * @param {Array<string>} params parâmetros enviados para as chaves
 * @returns {string} texto formatado
 */
function formatString(text = "", params = []) {
  if (isEmpty(text) || isEmpty(params)) {
    return text
  }

  const args = Array.prototype.slice.call(params, 0)
  return text.replace(/{(\d+)}/g, (match, number) => (typeof args[number] !== "undefined"
    ? args[number]
    : match))
}

/**
 * Formata um template do WhatsApp
 * @param {string} text texto a formatar
 * @param {Array<string>} params parâmetros enviados para as chaves
 * @returns {string} template formatado
 */
function formatWhatsAppTemplate(text = "", params = []) {
  if (isEmpty(text) || isEmpty(params)) {
    return text
  }

  const args = Array.prototype.slice.call(params, 0)
  return text.replace(/{{(\d+)}}/g, (match, number) => (!isEmpty(args[number - 1])
    ? args[number - 1]
    : match))
}

/**
 * Conta quantos parâmetros possui
 * @param {string} text texto para contar os caracteres
 * @param {string} character caractere a ser contado
 * @returns {number} quantidade de parâmetros
 */
function countParameters(text = "", character = "") {
  if (isEmpty(text) || isEmpty(character)) {
    return text
  }

  return size((text.match(new RegExp(character, "g")) || []))
}

export {
  formatString,
  formatWhatsAppTemplate,
  countParameters,
  unaccent
}
