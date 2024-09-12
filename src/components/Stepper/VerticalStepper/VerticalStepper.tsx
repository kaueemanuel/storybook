import React from "react"

import { Icon } from "../../Icons/Icon"
import { Stepper } from "../Stepper"
import { StepperProps } from "../StepperProps"
import { Container, Stepper as StepperStyled } from "./VerticalStepper.styles"

export interface VerticalStepperProps
  extends Omit<StepperProps, "orientation" | "StepperComponent"> {}

export const VerticalStepper: React.FC<VerticalStepperProps> = ({
  ...props
}) => {
  return (
    <Container loading={false}>
      <Stepper
        {...props}
        orientation="vertical"
        data-testid="stepper-vertical"
        StepperComponent={StepperStyled}
        connector={
          <Icon name="keyboard_arrow_down" className="stepper-connector" />
        }
      />
    </Container>
  )
}
