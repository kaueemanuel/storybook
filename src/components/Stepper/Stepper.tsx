import React, { useEffect, useRef } from "react"

import { Box, Step, StepButton } from "@mui/material"

import { useStepper } from "./hooks/useStepper"
import {
  StepPanelProps,
  StepperContentProps,
  StepperProps,
} from "./StepperProps"

export const StepPanel: React.FC<StepPanelProps> = ({
  children,
  activeStep,
  index,
  ...other
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stepPanelRef = useRef<any>(null)

  useEffect(() => {
    if (
      stepPanelRef.current &&
      !stepPanelRef.current.hidden &&
      !stepPanelRef.current.querySelectorAll(".MuiBox-root.box-step-footer")
        .length
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        "Not Found: Must contain a MuiBox with the class box-step-footer within the Stepper content for styling the step control buttons."
      )
    }
  }, [activeStep, stepPanelRef.current])

  return (
    <div
      role="steppanel"
      ref={stepPanelRef}
      className="box-content"
      hidden={activeStep !== index}
      id={`steppanel-${index}`}
      aria-labelledby={`step-${index}`}
      {...other}
    >
      {activeStep === index && children}
    </div>
  )
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  orientation,
  stepProps = {},
  activeStep = 0,
  StepperComponent,
  stepLabelProps = {},
  "data-testid": dataTestid = "stepper",
  ...props
}) => {
  const {
    loading,
    a11yProps,
    stepLabels,
    handleBack,
    handleStep,
    completeStep,
    restartStepper,
    activeStepValue,
    isStepCompleted,
  } = useStepper({
    steps,
    activeStep,
  })

  const defaultContentProps: StepperContentProps = {
    loading,
    handleStep,
    handleBack,
    completeStep,
    restartStepper,
    isStepCompleted,
    activeStep: activeStepValue,
  }

  const ContentSteps = () => {
    const contentSteps = steps.map(({ content, contentProps }, index) => (
      <StepPanel
        activeStep={activeStepValue}
        index={index}
        key={`steppanel-${index}`}
      >
        {React.createElement(content, {
          ...defaultContentProps,
          ...contentProps,
        })}
      </StepPanel>
    ))

    return orientation === "vertical" ? (
      <Box className="step-content">{contentSteps}</Box>
    ) : (
      contentSteps
    )
  }

  return (
    <>
      <Box className="box-stepper">
        <StepperComponent
          {...props}
          data-testid={dataTestid}
          orientation={orientation}
          activeStep={activeStepValue}
        >
          {stepLabels.map((label, index) => (
            <Step {...stepProps} {...a11yProps(index)}>
              <StepButton
                {...stepLabelProps}
                disableTouchRipple
                className="step-label-button"
                onClick={() => handleStep(index)}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </StepperComponent>
      </Box>
      <ContentSteps />
    </>
  )
}
