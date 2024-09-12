import { useMemo, useState } from "react"

import { cloneDeep } from "lodash"

import { StepDataProps, StepperProps } from "../StepperProps"

export interface UseStepperProps {
  steps: StepDataProps[]
  activeStep: StepperProps["activeStep"]
}

export const useStepper = ({ steps, activeStep = 0 }: UseStepperProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [activeStepValue, setActiveStep] = useState<number>(activeStep)
  const [completed, setCompleted] = useState<{
    [k: number]: boolean
  }>({})

  const stepLabels = useMemo(() => {
    const stepsAux = cloneDeep(steps)
    return stepsAux.map(({ label }) => label)
  }, [steps])

  const a11yProps = (index: number) => ({
    key: `step-content ${index + 1}`,
    id: `step-${index}`,
    "aria-controls": `steppanel-${index}`,
    completed: completed[index],
  })

  const totalSteps = () => steps.length

  const completedSteps = () => Object.keys(completed).length

  const allStepsCompleted = () => completedSteps() === totalSteps()

  const isLastStep = useMemo<boolean>(
    () => activeStepValue === totalSteps() - 1,
    [activeStepValue]
  )

  const isStepCompleted = useMemo<boolean>(
    () => completed[activeStepValue] ?? false,
    [completed]
  )

  const newActiveStep = useMemo<number>(
    () =>
      isLastStep && !allStepsCompleted()
        ? steps.findIndex((_step, i) => !(i in completed))
        : activeStepValue + 1,
    [isLastStep, completed, activeStepValue]
  )

  const handleBack = () => {
    setLoading(false)
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step?: number) => {
    setActiveStep(step ?? newActiveStep)
  }

  const restartStepper = () => {
    setCompleted([])
    setLoading(false)
    handleStep(0)
  }

  const completeStep = () => {
    const newCompleted = cloneDeep(completed)
    newCompleted[activeStepValue] = true
    setCompleted(newCompleted)

    if (isLastStep) {
      setLoading(true)
      return
    }

    handleStep()
  }

  return {
    loading,
    a11yProps,
    stepLabels,
    handleBack,
    handleStep,
    completeStep,
    restartStepper,
    isStepCompleted,
    activeStepValue,
  }
}
