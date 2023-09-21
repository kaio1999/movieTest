import styled from "styled-components";

interface Props {
  moviesExist?: boolean;
  isMobile?: boolean;
}

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

export const Content = styled.div<Props>`
  width: 100%;
  min-height: ${(props) => props.moviesExist && "800px"};
  margin: 0 0 16px;
  padding: ${(props) => (props.moviesExist ? "16px" : "64px 0")};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.moviesExist ? "space-between" : "center"};
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
  max-width: 447px;
  max-height: 265.8px;
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

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  color: #999999;
`;

export const BoxPrice = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: 768px) {
    width: 253px;
    flex-direction: column;
  }
`;

export const BoxCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BoxInput = styled.div`
  width: 120px;
  height: 26px;

  display: flex;
  align-items: center;
  gap: 11px;
`;

export const InputNumber = styled.input`
  width: 62px;
  height: 26px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
`;

export const Divider = styled.div`
  width: 100%;

  border: 1px solid #999999;
`;

export const BoxPurchase = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Purchase = styled.button`
  width: 100%;
  max-width: 235.42px;
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

export const BoxTotal = styled.div`
  width: 100%;
  max-width: 197.26px;
  height: 21px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const TotalText = styled.p<Props>`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;

  margin-left: ${(props) => !props.isMobile && "15px"};
  margin-right: ${(props) => props.isMobile && "20%"};

  color: #999999;
`;

export const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;

  color: #2f2e41;
`;

export const BoxMovie = styled.div`
  width: 100%;

  display: flex;
  gap: 16px;
`;

export const WrapperMovie = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BoxMoviesValue = styled.div`
  display: flex;
  align-items: center;
`;

export const TextMobile = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

export const PriceText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: right;
`;

export const BoxSubTotal = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;
`;

export const BoxFooter = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PurchaseMobile = styled.button`
  width: 100%;
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

export const BoxTotalMobile = styled.div`
  width: 100%;
  height: 21px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;

  text-align: right;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;
