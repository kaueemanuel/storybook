import styled from "@emotion/styled"
import { Stepper as StepperComponent } from "@mui/material"

import { theme } from "../../../themes"

export const Stepper = styled(StepperComponent)`
  margin-left: -0.5em;

  &.MuiStepper-alternativeLabel {
    .MuiStep-root {
      display: flex;

      > .MuiSvgIcon-root {
        margin-right: 16px;
      }
    }
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
  height: 100%;
  display: flex;
  flex-direction: column;

  .box-stepper {
    padding: 16px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0px;
    flex-shrink: 0;
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
