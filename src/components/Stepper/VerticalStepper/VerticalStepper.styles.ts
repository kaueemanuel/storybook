import styled from "@emotion/styled"
import { Stepper as StepperComponent } from "@mui/material"

import { theme } from "../../../themes"

export const Stepper = styled(StepperComponent)`
  &.MuiStepper-vertical.MuiStepper-alternativeLabel {
    align-items: center;

    .MuiStep-vertical {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .stepper-connector {
    margin-left: 0.15rem;
  }

  .stepper-connector,
  .root-step {
    color: ${theme.palette.accent.main};
  }
  .MuiStepIcon-root {
    width: 30px;
    height: 30px;
  }

  .MuiStep-root {
    .MuiStepLabel-label {
      font-weight: 500;
    }
    .MuiStepIcon-text {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  .step-label-button {
    &.Mui-disabled {
      color: ${theme.palette.accent.main};

      .MuiStepIcon-root:not(.Mui-completed) {
        border-radius: 50%;
        box-shadow: inset 0px 0px 0px 1px ${theme.palette.accent.main};

        circle {
          visibility: hidden;
        }

        .MuiStepIcon-text {
          fill: currentColor;
          color: ${theme.palette.accent.main};
        }
      }
    }
  }
`

interface ContainerProps {
  loading: boolean
}

export const Container = styled("div", {
  shouldForwardProp: (propName: string) => propName !== "loading",
})<ContainerProps>`
  flex: 1;
  gap: 20px;
  height: 100%;
  display: flex;

  .step-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .box-stepper {
    display: flex;
    min-width: 200px;
    justify-content: center;
  }

  .box-content {
    flex: 1;
    padding: 0;
    overflow-y: auto;
  }

  .box-step-footer {
    z-index: 1;
    padding: 0;
    bottom: 0px;
    flex-shrink: 0;
    position: sticky;
    background-color: ${theme.palette.background.paper};
  }
`
