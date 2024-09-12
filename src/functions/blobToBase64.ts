import split from "lodash/split"

/**
 * Transform Blob(File) to Base64 string.
 *
 * @param {Blob} blob - arquivo blob
 * @return {String} Apenas a parte necessária da string base64 (depois da ,).
 *
 * @example
 *
 * blobToBase64(pdfBlob)
 */
export const blobToBase64 = blob => new Promise((resolve) => {
  const reader = new FileReader()
  reader.readAsDataURL(blob)
  reader.onloadend = () => {
    const rawB64: string = `${reader.result}`
    const b64String = split(rawB64, ",")[1]
    resolve(b64String)
  }
})
