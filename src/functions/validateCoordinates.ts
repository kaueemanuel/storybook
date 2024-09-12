import isEmpty from "lodash/isEmpty"

const regLat = new RegExp(/^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/)
const regLon = new RegExp(/^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/)

export function validateCoordinates({ latitude, longitude }) {
  const validLat = regLat.test(latitude)
  const validLon = regLon.test(longitude)

  if (!isEmpty(latitude) && !isEmpty(longitude)) {
    return validLat && validLon
  } else if (!isEmpty(latitude) && isEmpty(longitude)) {
    return validLat
  } else if (isEmpty(latitude) && !isEmpty(longitude)) {
    return validLon
  }

  return false
}
