import styled from "@emotion/styled"

export const Container = styled.div`
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: calc(100% - 52px);
  padding-bottom: 16px;

  > div {
    width: calc(100% - 32px);
  }
`
