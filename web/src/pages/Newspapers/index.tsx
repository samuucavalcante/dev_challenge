import React, { useCallback, useEffect, useState } from 'react';

import { Card, Button } from 'react-bootstrap';

import { Form } from '@unform/web';

import { useRouteMatch, Link, useHistory } from 'react-router-dom';
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

  const handleSubmit = useCallback(() => {
    console.log('12312');
  }, []);

  const apiRequest = useCallback(async () => {
    const { data } = await api.get(`/newspaper/${params.id}`);
    setNewspaper([data]);
  }, [params.id]);

  useEffect(() => {
    apiRequest();
  }, [apiRequest]);

  return (
    <>
      {newspaper?.map((newsp) => {
        document.title = `${newsp.title} | Newspaper`;
        return (
          <Container key={newsp.id} className="container-fluid">
            <Link to="/" className="text-primary">
              Voltar
            </Link>
            <br />
            <br />
            <Card>
              <Card.Header className="bg-primary">
                <Card.Title
                  className="text-light d-flex justify-content-between flex-column "
                  style={{ fontSize: '30px' }}
                >
                  {newsp.title}
                  <span
                    style={{
                      fontSize: '14px',
                      opacity: '0.8',
                      marginTop: '10px',
                    }}
                  >
                    Atualizado em {newsp.created_at}
                  </span>
                </Card.Title>
              </Card.Header>
              <Card.Body className="bg-white">
                <Card.Text>{newsp.description}</Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Form onSubmit={handleSubmit}>
              <Card>
                <Card.Header className="bg-dark">
                  <Card.Title className="text-light">Comente:</Card.Title>
                </Card.Header>
                <Card.Footer className="bg-light">
                  <Input
                    isArea
                    className="form-control"
                    placeholder="Escreva um comentário"
                    name="description"
                  />
                  <Input
                    isArea={false}
                    value={params.id}
                    name="id"
                    style={{ visibility: 'hidden' }}
                    className="form-control"
                    placeholder="Escreva um comentário"
                  />
                  <br />
                  <Button type="submit" className="btn btn-outline-dark">
                    Comentar
                  </Button>
                </Card.Footer>
              </Card>
            </Form>
          </Container>
        );
      })}
    </>
  );
};

export default Newspapers;
