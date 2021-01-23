import React, { useState } from 'react';

import moment from 'moment';
import { Container } from './styles';

// type CardProps = LinkHTMLAttributes<HTMLLinkElement>;

export interface PropsNewspaper {
  id?: string;
  title: string;
  description: string;
  created_at: string;
}

// interface Data {
//   title: string;
//   description: string;
//   createdAt: string;
//   algo: PropsNewspaper;
// }

const Card: React.FC<PropsNewspaper> = ({ title, description, created_at }) => {
  return (
    <>
      <Container>
        <a href="/asad">
          <img
            src="https://image.freepik.com/vetores-gratis/logotipo-de-jornal_10250-2354.jpg"
            alt="Newspaper"
          />
          <div>
            <h3>{title}</h3>
            <strong>{created_at}</strong>
            <p>{description}</p>
          </div>
        </a>
      </Container>
    </>
  );
};

export default Card;
