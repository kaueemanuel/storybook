export const getValueFromUrlParam = (search, parameter) => {
  let params = search.split("?")
  params = params.length > 1 ? params[1] : ""
  return params.split("&")
    .map(param => param.split("="))
    .filter(([name]) => name === parameter)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(([_, value]) => value)  
}
