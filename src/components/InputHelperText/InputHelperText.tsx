import { Container } from "./InputHelperText.styles"

export interface InputHelperTextProps {
  text: string
  error?: boolean
  disabled?: boolean
}

export const InputHelperText = ({ text, error, disabled }) => {
  return (
    <Container error={error} disabled={disabled}>
      {text}
    </Container>
  )
}
