import React, { useCallback, useEffect, useState } from 'react';

import { Card } from 'react-bootstrap';

import { useRouteMatch } from 'react-router-dom';
import { Container } from './styles';

import api from '../../services/api';

// import Input from '../../components/Input';

interface Params {
  id: string;
}

interface Newspaper {
  id: string;
  title: string;
  description: string;
  created_at?: string;
  update_at?: string;
}

const Newspapers: React.FC = () => {
  const [newspaper, setNewspaper] = useState<Newspaper[] | null>();

  const { params } = useRouteMatch<Params>();

  const apiRequest = useCallback(async () => {
    const { data } = await api.get(`/newspaper/${params.id}`);
    setNewspaper([data]);
  }, [params.id]);

  useEffect(() => {
    apiRequest();
  }, [apiRequest]);

  return (
    <>
      {newspaper?.map((newsp) => (
        <Container key={newsp.id} className="container-fluid">
          <Card>
            <Card.Header>
              <Card.Title style={{ fontSize: '30px' }}>
                {newsp.title}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>{newsp.description}</Card.Text>
            </Card.Body>
            <br />
          </Card>
          <h1 style={{ fontSize: '24px' }}>Comente:</h1>
        </Container>
      ))}
    </>
  );
};

export default Newspapers;
