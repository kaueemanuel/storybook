/**
 * userAvatarByName
 * Convert a name string to a two letter upper cased string
 * e.g. 'Super Admin User' => 'SU'
 *
 * */
export const userAvatarByName = (name: string) => {
  const words = name
    .split(" ")
    .map((word) => word.replace(/^[^a-zA-Z]+/, ""))
    .filter(Boolean)

  // Se não houver palavras válidas, retorne string vazia
  if (words.length === 0) {
    return ""
  }

  // Obtenha as iniciais
  const firstInitial = words[0].charAt(0).toUpperCase()
  const lastInitial =
    words.length > 1
      ? words[words.length - 1].charAt(0).toUpperCase()
      : firstInitial

  if (words.length === 1) {
    return (firstInitial + firstInitial).toUpperCase()
  }

  // Retorne a inicial do primeiro e do último nome
  return (firstInitial + lastInitial).toUpperCase()
}
