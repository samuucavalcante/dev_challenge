import React, { useEffect, useState, useCallback } from 'react';

import { useRouteMatch } from 'react-router-dom';
import { Form } from '@unform/web';
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
    <Container className="container">
      <a href="/" className="text-primary">
        Voltar
      </a>
      <br />
      <br />
      {newspaper?.map((newsp) => (
        <>
          <h1 className="text-lg-left " style={{ fontSize: '45px' }}>
            {newsp.title}
          </h1>
          <p className="text-muted text-sm">{newsp.description}</p>
        </>
      ))}
      <br />
      <br />
      <Form
        onSubmit={() => {
          console.log('');
        }}
      >
        <hr />
        <br />
        <h3 className="text-secundary">Coment</h3>
        <br />
        <textarea
          placeholder="Digite sua comentário"
          className="form-control text-muted"
          name="corpo"
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Responder
        </button>
        <input type="hidden" name="pergunta" value="<%= pergunta.id %>" />
      </Form>
      <br />
      <div className="card">
        <div className="card-body">{/* <p>Respostas aqui</p> */}</div>
      </div>
    </Container>
  );
};

export default Newspapers;
