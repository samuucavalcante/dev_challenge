import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  /* padding: 2% 5%;
  h1 {
    margin-left: 17px;
  }  */
`;

export const Header = styled.div`
  padding: 10px;
  text-align: center;
  /* background-color: #282a36; */
  display: flex;
  /* flex: 1; */
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* margin: 0 15px; */
  margin-bottom: 20px;

  h1 {
    font-size: 32px;
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
    justify-content: center;
    a {
      margin-top: 10px;
      padding: 10px;
      font-size: 14px;
    }
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* @media (max-width: 800px) {
    justify-content: space-around;
  } */
`;

export const Footer = styled.div``;
export const Nothing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    svg {
      color: gray;
    }
    h3 {
      color: gray;
    }
  }
`;
