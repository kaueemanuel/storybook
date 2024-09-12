/**
 * Formata o nome do icone
 * @param {string} name nome do icone
 * @returns `string` nome do icone formatado
 */
export const getFormattedIconName = (name: string) => {
  const nameArray = name.split("_pgv").join("").split("_")
  const nameAux = nameArray.map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1) + " ",
  )
  return nameAux
}
