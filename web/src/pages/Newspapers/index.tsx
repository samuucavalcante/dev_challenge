import React, { useCallback, useEffect, useState } from 'react';

import { Card, Button } from 'react-bootstrap';

import { Form } from '@unform/web';

import { useRouteMatch, Link } from 'react-router-dom';
import { Container } from './styles';

import api from '../../services/api';

import Input from '../../components/Input';

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
          <Link to="/" className="text-primary">
            Voltar
          </Link>
          <br />
          <br />
          <Card>
            <Card.Header className="bg-danger">
              <Card.Title
                className="text-light d-flex justify-content-between  align-items-center"
                style={{ fontSize: '30px' }}
              >
                {newsp.title}
                <span style={{ fontSize: '18px' }}>
                  Atualizado em {newsp.created_at}
                </span>
              </Card.Title>
            </Card.Header>
            <Card.Body className="bg-white">
              <Card.Text>{newsp.description}</Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Form
            onSubmit={() => {
              console.log('');
            }}
          >
            <Card>
              <Card.Header className="bg-dark">
                <Card.Title className="text-light">Comente:</Card.Title>
              </Card.Header>
              <Card.Footer className="bg-light">
                <Input isArea className="form-control" name="answer" />
                <br />
                <Button type="submit" className="btn btn-outline-dark">
                  Comentar
                </Button>
              </Card.Footer>
            </Card>
          </Form>
        </Container>
      ))}
    </>
  );
};

export default Newspapers;
