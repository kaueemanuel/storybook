import styled from "@emotion/styled"

interface ContainerProps {
  backgroundColor: string
  textColor: string
  compacted: boolean
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 3px;
  height: 24px;
  padding: ${({ compacted }) => (compacted ? "0px" : "4px 8px 4px 2px")};

  cursor: pointer;

  p {
    font-size: 12px;
    font-weight: 700;
  }
`
