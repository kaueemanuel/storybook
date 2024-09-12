export const cloneObject = (obj = {}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch (e) {
    throw e
  }
}
