/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isArray,
  isBoolean,
  isEmpty,
  isNil,
  isNumber,
  isObject,
  map,
} from "lodash"

const toURIValue = (key, value) => {
  const propertyValue = isObject(value) ? JSON.stringify(value) : value

  return `${encodeURIComponent(key)}=${encodeURIComponent(propertyValue)}`
}

export const toQueryParams = (
  dataObject,
  options: {
    keepArrayParams?: string[] | null
  } = {
    keepArrayParams: ["order"],
  },
) => {
  if (!dataObject || isEmpty(dataObject)) {
    return ""
  }

  const str: any = []

  Object.keys(dataObject).forEach((propName) => {
    if (
      Object.prototype.hasOwnProperty.call(dataObject, propName) &&
      !isNil(dataObject[propName]) &&
      (isBoolean(dataObject[propName]) ||
        isNumber(dataObject[propName]) ||
        !isEmpty(dataObject[propName]))
    ) {
      let param: any = toURIValue(propName, dataObject[propName])

      if (
        isArray(dataObject[propName]) &&
        !options?.keepArrayParams?.includes(propName)
      ) {
        const values = map(dataObject[propName], (arrValue) =>
          toURIValue(propName, arrValue),
        )

        param = values.join("&")
      }

      if (!isEmpty(param)) {
        str.push(param)
      }
    }
  })

  return str.join("&")
}
