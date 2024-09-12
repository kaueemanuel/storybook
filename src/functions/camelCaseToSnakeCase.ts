export const camelCaseToSnakeCase = (str: string) => {
  let result = str.replace(/([A-Z])/g, " $1").trim()
  result = result.split(" ").join("_").toLowerCase()
  return result
}
