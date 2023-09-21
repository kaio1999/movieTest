import styled from "styled-components";
import { Grid } from "@mui/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 960px;
  margin: 0 auto;
`;

export const Content = styled(Grid)`
  display: flex;
  gap: 1rem;

  width: 100%;
  margin: 0;

  @media (min-width: 768px) {
    margin: 24px auto;
  }
`;

export const BoxCard = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export const ContentError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20%;

  font-family: sans-serif;
  font-size: 24px;
  
  color: #fff;
`;
