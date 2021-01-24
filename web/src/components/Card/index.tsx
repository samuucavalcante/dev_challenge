import React, { useState } from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';
import { Container } from './styles';

// type CardProps = LinkHTMLAttributes<HTMLLinkElement>;

export interface PropsNewspaper {
  id?: string;
  title: string;
  description: string;
  created_at: string;
}

const Card: React.FC<PropsNewspaper> = ({
  id,
  title,
  description,
  created_at,
}) => {
  return (
    <>
      <Container>
        <Link to={`/newspaper/${id}`}>
          <img
            src="https://image.freepik.com/vetores-gratis/logotipo-de-jornal_10250-2354.jpg"
            alt="Newspaper"
          />
          <div>
            <h3>{title}</h3>
            <strong>{created_at}</strong>
            <p>{description}</p>
          </div>
        </Link>
      </Container>
    </>
  );
};

export default Card;
