import React from "react"

import { InputMask, InputMaskProps } from "../InputMask"
import { CellphoneWithDDDMaskFormat } from "../InputMask.formats"

export const PhoneInputMask: React.FC<Omit<InputMaskProps, "mask">> = ({
  ...props
}) => {
  return <InputMask {...props} mask={CellphoneWithDDDMaskFormat} />
}
