 

import {
  StepProps,
  StepperProps as StepperPropsMUI,
  StepButtonProps,
} from "@mui/material"

export interface StepPanelProps {
  children?: React.ReactNode | string
  activeStep: number | string
  index: number
}

export interface StepperContentProps {
  loading: boolean
  activeStep: number
  handleBack: () => void
  completeStep: () => void
  isStepCompleted: boolean
  restartStepper: () => void
  handleStep: (step?: number) => void
}

export interface StepDataProps<
  T extends StepperContentProps = StepperContentProps
> {
  label: string
  content: React.FC<T>
  contentProps?: T
}

export interface StepperProps extends StepperPropsMUI {
   
  steps: StepDataProps[]
  "data-testid"?: string
  stepProps?: StepProps
  stepLabelProps?: StepButtonProps
  StepperComponent: React.FC<StepperPropsMUI>
}
