import React, { useEffect, useState, useCallback } from 'react';

import { CgSmileSad } from 'react-icons/cg';

import { Link } from 'react-router-dom';
import { Container, Header, Section, Footer, Nothing } from './styles';

import Card, { PropsNewspaper } from '../../components/Card';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [newspaper, setNewspaper] = useState<PropsNewspaper[]>([]);
  const [isNothing, setIsNothing] = useState(false);

  const apiRequest = useCallback(async (): Promise<void> => {
    const { data } = await api.get('/newspaper');
    data.reverse();

    if (!data) {
      setNewspaper([]);
    }

    setNewspaper(data);
  }, []);

  useEffect(() => {
    try {
      setIsNothing(false);
      if (newspaper.length === 0) {
        setIsNothing(true);
      }

      if (
        newspaper.length > 0 &&
        document.location.href === 'http://localhost:3000/'
      ) {
        document.title = `(${newspaper.length}) Newspaper - Breaking News, BR News, World News and Videos`;
      }
      apiRequest();
    } catch (err) {
      console.log(err);
    }
  }, [newspaper, apiRequest]);

  return (
    <>
      <Container className="container-fluid">
        <Header className="container ">
          <h1>Classificados</h1>
          <Link to="/newspaper/create">+ Novo classificado</Link>
        </Header>
        <Section className="container-fluid">
          {newspaper &&
            newspaper.map((newsp) => (
              <Card
                key={newsp.id}
                id={newsp.id}
                title={newsp.title}
                description={newsp.description}
                created_at={newsp.created_at}
              />
            ))}
          {isNothing && (
            <Nothing>
              <div>
                <CgSmileSad size={40} />
                <h3>No content yet</h3>
              </div>
            </Nothing>
          )}
        </Section>
        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;
