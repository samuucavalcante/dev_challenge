import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  text-decoration: none;
  font-family: system-ui;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 280px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border: 0;
  transition: transform 0.1s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1000px) {
    max-width: 350px;
  }
  @media (max-width: 814px) {
    max-width: 600px;
  }

  background-color: #eaeaea;
  border-radius: 3px;
  margin-bottom: 30px;
  margin-left: 10px;
  & + div {
    margin-bottom: 30px;
    margin-left: 10px;
  }
`;

//  a {
//     text-decoration: none;
//     img {
//       width: 100%;
//       height: 50%;
//       max-height: 350px;
//       object-fit: cover;
//       border-radius: 2px 2px 0px 0px;
//     }

//     > div {
//       background-color: gray;
//       padding: 10px;
//       width: 100%;
//       max-width: 280px;
//       display: flex;
//       height: 100px;
//       flex-direction: column;
//       word-wrap: break-word;
//       h3 {
//         font-size: 20px;
//         display: block;
//         color: rgba(0, 0, 0, 0.8);
//         font-weight: 600;
//       }
//       strong {
//         display: block;

//         color: gray;
//         font-size: 11px;
//       }
//       p {
//         color: black;
//         margin-top: 8px;
//         font-size: 14px;
//       }
//     }
//   }
// `;
