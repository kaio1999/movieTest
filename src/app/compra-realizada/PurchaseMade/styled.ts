import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 960px;
  margin: 0 16px;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 0 16px;
  padding: 64px 0;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  background-color: #fff;

  @media (min-width: 768px) {
    margin: 24px 0;
    padding: 64px;
  }
`;

export const TextEmpt = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;

  white-space: pre-line;
`;

export const ImageEmpty = styled.img`
  width: 100%;
  max-width: 294.96px;
  max-height: 307px;
`;

export const BackHome = styled.button`
  width: 100%;
  max-width: 180px;
  height: 40px;
  padding: 8px;
  border-radius: 4px;
  border: none;

  color: #fff;
  background-color: #009edd;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;

  cursor: pointer;
`;