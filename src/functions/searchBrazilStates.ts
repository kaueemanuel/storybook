import find from "lodash/find"
import get from "lodash/get"

import { getBrazilStates } from "./getBrazilStates"

export const searchBrazilStates = (state) => {

  const states = getBrazilStates

  const response = find(states, ({ value }) => value === state)

  return get(response, "label", "-")
}
