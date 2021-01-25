import React from 'react';

import { Card as CardBootstrap } from 'react-bootstrap';

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
      <Container
        key={id}
        to={`/newspaper/${id}`}
        style={{ textDecoration: 'none' }}
      >
        <CardBootstrap
          key={id}
          bg="info"
          text="white"
          style={{ width: '100%' }}
        >
          <CardBootstrap.Header style={{ fontSize: '16px' }}>
            {created_at}
          </CardBootstrap.Header>
          <CardBootstrap.Body style={{ width: '100%' }}>
            <CardBootstrap.Title>{title}</CardBootstrap.Title>
            <CardBootstrap.Text>{description}</CardBootstrap.Text>
          </CardBootstrap.Body>
        </CardBootstrap>
      </Container>
    </>
  );
};

export default Card;
