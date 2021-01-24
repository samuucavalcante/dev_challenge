import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  }

  html {
    padding: 2% 5%;
    ::-webkit-scrollbar {
    width: 7px;
    height: 7px;

  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: rgba(0,0,0,0.6);
  }
  overflow-y: auto;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  border-radius: 5px;
  }

  body {
    /* background: #312e38; */
    /* color: #fff; */
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    font-size: 16px;
  }
a {
  font-family: 'Poppins', sans-serif; 
  text-decoration: none;
}
  

  button {
    cursor: pointer;
  }
`;
