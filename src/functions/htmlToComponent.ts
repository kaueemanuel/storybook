import parse from "html-react-parser"
import { forEach, join, split, replace, includes } from "lodash"

import { htmlValidTags } from "./htmlValidTags"

export const htmlToComponent = (html) => {
  let formattedHtml = ""
  // Cria um array com todas as linhas
  const textLines = split(html, "\n")
  // Faz o Join das tags validas com um "ou" do regex
  const validTagJoined = join(htmlValidTags(), "|")
  forEach(textLines, (line) => {
    // Caso a linha conter uma abertura de tag
    if (includes(line, "<")) {
      // Valida se a há algum padrão que inicie com < ou </, e que não seja uma tag válida, e
      // que tenha um espaço depois da tag ou um fechamento de tag
      const pattern = new RegExp(
        `(<|<\\/)(?!(${validTagJoined})(\\s+(?=\\w)|\\s*\\/?\\s*>))[^\\/\\W].+?(\\/?>)`,
        "gi"
      )

      // Caso se encaixe
      if (pattern.test(line)) {
        // Traz todas as partes que se encaixam no padrão
        const matches = line.matchAll(pattern.source as any)
        let formattedLine = line
         
        for (const match of matches) {
          // Pega a frase bruta encontrada e escapa a abertura e fechamento de tag
          const escapedTags = replace(
            replace(match[0], /</g, "&lt;"),
            />/g,
            "&gt;"
          )

          // Pega toda linha, e substitui a parte por a que foi "escapada"
          formattedLine = replace(formattedLine, match[0], escapedTags)
        }
        formattedHtml += `${formattedLine}`
      } else {
        formattedHtml += `${line}\n`
      }
    } else {
      formattedHtml += `${line}\n`
    }
  })

  return parse(formattedHtml)
}
