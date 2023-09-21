import styled from "styled-components";

interface Props {
    itsInTheCart?: boolean;
    isMobile?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  width: ${(props) => props.isMobile ? '90%' : '100%'};
  max-width: ${(props) => !props.isMobile && '310px'};
  max-height: 305px;
  padding: 10px 11px 10px 11px;
  border-radius: 4px;

  background-color: white;
`;

export const BoxImage = styled.div`
  max-width: 288px;
  max-height: 237px;

  gap: 2px;
`;

export const Text = styled.p`
  max-width: 147px;
  
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Price = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
`;

export const AddCart = styled.button<Props>`
    width: 100%;
    max-width: 288px;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    border: none;

    color: #fff;
    background-color: ${(props) => props.itsInTheCart ? '#039B00' : '#009EDD'};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;

    cursor: pointer;
`;

export const Qty = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    margin-right: 12px;
`;