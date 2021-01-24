import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  /* width: 100%;
  padding: 2% 5%;
  h1 {
    margin-left: 17px;
  } */
`;

export const Header = styled.div`
  /* background-color: #282a36; */
  display: flex;
  /* flex: 1; */
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    margin: 0 40px;
  }
  h1 {
    font-size: 32px;
    /* color: white; */
  }

  a {
    font-size: 16px;
    text-decoration: none;
    display: block;
    background-color: #42b72a;
    padding: 12px;

    border-radius: 10px;

    color: white;

    &:hover {
      background-color: ${shade(0.1, '#42b72a')};
    }
  }
  @media (max-width: 814px) {
    flex-direction: column;
    a {
      margin-top: 10px;
      padding: 10px;
      font-size: 14px;
    }
  }
`;

export const Section = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  /* @media (max-width: 800px) {
    justify-content: space-around;
  } */
`;

export const Footer = styled.div``;
