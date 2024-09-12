import styled from "@emotion/styled"

interface ContainerProps {
  disabled: boolean
}

export const Container = styled("div", {
  shouldForwardProp: (propName: string) => !["disabled"].includes(propName),
})<ContainerProps>`
  min-width: 400px;
  font-size: 0.875rem;
  .input-dropzone {
    opacity: ${({ disabled }) => disabled && "0.8"};
  }
`
