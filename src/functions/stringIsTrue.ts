import toString from "lodash/toString"

export const stringIsTrue = str => (
  str === true ||
  str === toString(true) ||
  str === 1 ||
  str === toString(1)
)
