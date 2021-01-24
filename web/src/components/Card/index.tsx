import React, { useState } from 'react';

import { Card as CardBootstrap, Button } from 'react-bootstrap';

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
        <CardBootstrap style={{ width: '100%' }}>
          <CardBootstrap.Img
            variant="top"
            src="https://image.freepik.com/vetores-gratis/logotipo-de-jornal_10250-2354.jpg"
          />
          <CardBootstrap.Body style={{ width: '100%' }}>
            <CardBootstrap.Title>Card Title</CardBootstrap.Title>
            <CardBootstrap.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </CardBootstrap.Text>
            <Button variant="primary">Go somewhere</Button>
          </CardBootstrap.Body>
        </CardBootstrap>
      </Container>
    </>
  );
};

export default Card;
