import React, { useEffect, useState } from 'react';

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

        setNewspaper([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    show();
  }, [newspaper]);

  return (
    <>
      <Container className="container-fluid">
        <Header>
          <h1>Classificados</h1>
          <a href="/newspaper">+ Novo classificado</a>
        </Header>
        <Section>
          {newspaper &&
            newspaper.map((newsp) => (
              <Card
                key={newsp.id}
                title={newsp.title}
                description={newsp.description}
                created_at={newsp.created_at}
              />
            ))}
        </Section>
      </Container>
      <Footer />
    </>
  );
};
// .replace('T', ' ')
//       .replaceAll('-', '/')
//       .replace(':', 'h')
//       .slice(0, 19)}
export default Dashboard;
