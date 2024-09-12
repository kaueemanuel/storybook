import DOMPurify from "dompurify"
import isEmpty from "lodash/isEmpty"

export const sanitizeHtml = (
  html: string | Node,
  options: DOMPurify.Config = {}
) => {
  if (!isEmpty(html)) {
    return DOMPurify.sanitize(html, options)
  }
  return ""
}
