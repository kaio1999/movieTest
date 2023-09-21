import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30%;
`;

export const LoaderContainer = styled.div`
  height: 62.25px;
  width: 62.25px;
  animation: loader-1-1 1.8s linear infinite;
  @keyframes loader-1-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;