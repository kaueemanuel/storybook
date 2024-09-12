import styled from "@emotion/styled"

interface ConteinerProps {
  backgroundOpacity: number
  backgroundColor: string
}
export const Container = styled.div<ConteinerProps>`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;

  .background {
    z-index: 999;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: ${(props) => props.backgroundOpacity};
    background-color: ${(props) => props.backgroundColor};
  }

  .img {
    z-index: 1000;
    position: absolute;
    width: auto;
    max-height: 200px;
    height: 100%;
  }
`
