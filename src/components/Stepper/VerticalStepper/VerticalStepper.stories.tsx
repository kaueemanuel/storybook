import { Box, Stack, Typography } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../Button/Button"
import { StepperContentProps } from "../StepperProps"
import { VerticalStepper as VerticalStepperComponent } from "./VerticalStepper"

const FooterComponent = ({
  activeStep,
  handleBack,
  completeStep,
  restartStepper,
  isStepCompleted,
}: StepperContentProps) => (
  <Box className="box-step-footer">
    <Stack useFlexGap padding={2} spacing={3} direction="row">
      <Button onClick={restartStepper} disabled={activeStep == 0} color="error">
        Reset
      </Button>
      <Button onClick={handleBack} disabled={activeStep == 0}>
        Backward
      </Button>
      {activeStep === 0 ? (
        <Button variant="contained" onClick={completeStep}>
          Forward
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={completeStep}
          loading={isStepCompleted}
        >
          Confirm
        </Button>
      )}
    </Stack>
  </Box>
)

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Navigation/Stepper/VerticalStepper",
  component: VerticalStepperComponent,
  render: (args) => (
    <VerticalStepperComponent key={JSON.stringify(args)} {...args} />
  ),
  decorators: [
    (Story) => (
      <div style={{ height: "300px", width: "100%", maxWidth: "700px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    steps: [
      {
        label: "Step 1",
        content: (props) => (
          <>
            <Typography>
              Step 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat accumsan cursus. Phasellus rhoncus nec neque eu aliquet.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </Typography>
            <FooterComponent {...props} />
          </>
        ),
      },
      {
        label: "Step 2",
        content: (props) => (
          <>
            <Typography>
              Step 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat accumsan cursus. Phasellus rhoncus nec neque eu aliquet.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </Typography>
            <FooterComponent {...props} />
          </>
        ),
      },
    ],
  },
} satisfies Meta<typeof VerticalStepperComponent>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {},
}
