import React, {
  LinkHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Container } from './styles';

import api from '../../services/api';

type CardProps = LinkHTMLAttributes<HTMLLinkElement>;

const Card: React.FC<CardProps> = () => {
  return (
    <>
      <Container>
        <a href="/asad">
          <img
            src="https://cms-assets.tutsplus.com/uploads/users/117/posts/26852/image/fei3.jpg"
            alt=""
          />
          <div>
            <h3>How to Conduct Remote Usability Testing</h3>
            <strong>20/01/2012 as 09:30</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              assumenda quod dignissimos. Atque consequuntur, placeat facere
              exercitationem fugiat tenetur aut!
            </p>
          </div>
        </a>
      </Container>
    </>
  );
};

export default Card;
