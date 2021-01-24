import React, { useEffect, useState } from 'react';

import { BoxLoading } from 'react-loading-typescript';
import { Link } from 'react-router-dom';
import { Container, Header, Section, Footer } from './styles';

import Card, { PropsNewspaper } from '../../components/Card';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [newspaper, setNewspaper] = useState<PropsNewspaper[]>([]);

  useEffect(() => {
    async function show(): Promise<void> {
      try {
        const response = await api.get('/newspaper');
        if (!response) {
          setNewspaper([]);
          return;
        }

        const resData = response.data.reverse();

        setNewspaper([...resData]);
      } catch (err) {
        console.log(err);
      }
    }
    show();
  }, [newspaper]);

  return (
    <>
      <Container className="container-fluid">
        <Header className="container">
          <h1>Classificados</h1>
          <Link to="/newspaper/create">+ Novo classificado</Link>
        </Header>
        <Section className="container-fluid">
          {newspaper ? (
            newspaper.map((newsp) => (
              <>
                <Card
                  key={newsp.id}
                  id={newsp.id}
                  title={newsp.title}
                  description={newsp.description}
                  created_at={newsp.created_at}
                />
              </>
            ))
          ) : (
            <BoxLoading
              speed={0}
              color="gray"
              size="large"
              style={{
                position: 'absolute',
                top: '50%',
                bottom: '-50%',
                left: '50%',
                right: '50%',
              }}
            />
          )}
        </Section>
        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;
