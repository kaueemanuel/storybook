import flow from "lodash/fp/flow"
import join from "lodash/fp/join"
import split from "lodash/fp/split"

export const universalPhone = (region, phone) => `${ region }${ flow(
  split("("),
  join(""),
  split(")"),
  join(""),
  split("-"),
  join(""),
  split(" "),
  join("")
)(phone) }`

