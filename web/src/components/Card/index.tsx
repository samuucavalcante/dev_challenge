import React, { LinkHTMLAttributes, useState, useEffect } from 'react';

import { Container } from './styles';

import api from '../../services/api';

type CardProps = LinkHTMLAttributes<HTMLLinkElement>;

interface Data {
  title: string;
  description: string;
  createdAt: string;
}

const Card: React.FC<CardProps> = () => {
  const [newspaper, setNewspaper] = useState<Data[]>([]);

  useEffect(() => {
    async function show(): Promise<void> {
      try {
        const response = await api.get('/newspaper');
        if (!response) {
          return setNewspaper([]);
        }

        setNewspaper([...response.data]);
        newspaper.map((a) => {
          console.log(a.title);
        });
      } catch (err) {
        console.log(err);
      }
    }
    show();
  }, [newspaper]);

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
