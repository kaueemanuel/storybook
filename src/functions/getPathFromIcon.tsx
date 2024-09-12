import ReactDOMServer from "react-dom/server"

/**
 * Obtém o path do ícone
 * @param {JSX|Element} Icon Ícone para obter o path svg
 */
export const getPathFromIcon = (Icon) => {
  // Obtém uma string html do ícone
  const htmlString = ReactDOMServer.renderToString(<Icon />)

  const domParser = new DOMParser()
  // Converte a string html para um documento svg/xml
  const svgDoc = domParser.parseFromString(htmlString, "image/svg+xml")

  // Retorn o path do ícone
  return svgDoc.querySelector("path")?.getAttribute("d")
}
