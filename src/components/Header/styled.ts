import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 960px;
  padding: 18px 10px 18px 10px;
  margin: 0 auto;

  color: white;
`;

export const LogoText = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  cursor: pointer;
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  max-width: 135.93px;
  height: 38px;

  cursor: pointer;
`;

export const TextCartHeader = styled.h2`
  font-weight: 600;
  font-size: 14px;
  line-height: 19.07px;
`;

export const ItemsCartHeader = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;

  color: #999999;
`;
