export const trimCpfCnpj = str => str
  .split(".")
  .join("")
  .split("/")
  .join("")
  .split("-")
  .join("")
  .split("_")
  .join("")
