import React from "react"

import { Icon } from "../../Icons/Icon"
import { Stepper } from "../Stepper"
import { StepperProps } from "../StepperProps"
import { Container, Stepper as StepperStyled } from "./HorizontalStepper.styles"

export interface HorizontalStepperProps
  extends Omit<StepperProps, "orientation" | "StepperComponent"> {}

export const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
  ...props
}) => {
  return (
    <Container loading={false}>
      <Stepper
        {...props}
        orientation="horizontal"
        data-testid="stepper-horizontal"
        StepperComponent={StepperStyled}
        connector={
          <Icon name="keyboard_arrow_right" className="stepper-connector" />
        }
      />
    </Container>
  )
}
