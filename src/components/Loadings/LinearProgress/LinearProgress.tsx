import {
  LinearProgressProps as MUILinearProgressProps,
  LinearProgress as MUILinearProgress,
} from "@mui/material"

export interface LinearProgressProps extends MUILinearProgressProps {
  "data-testid"?: string
}

export const LinearProgress: React.FC<LinearProgressProps> = ({
  "data-testid": dataTestid = "linear-progress",
  ...props
}) => {
  return <MUILinearProgress {...props} data-testid={dataTestid} />
}
