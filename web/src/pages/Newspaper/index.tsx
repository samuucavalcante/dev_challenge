import React, { useCallback, useState } from 'react';

import { Form } from '@unform/web';
import { Container } from './styles';

import api from '../../services/api';

import Input from '../../components/Input';

const Newspaper: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    console.log(data);
    await api.post('/newspaper', data);
  }, []);

  return (
    <Container className="container">
      <div className="container">
        <a href="/" className="text-primary">
          Voltar
        </a>
        <br />
        <br />
        <div className="card" id="formulario-pergunta">
          <div className="card-header">
            <h3>Crie seu Post </h3>
          </div>
          <div className="card-body">
            <Form onSubmit={handleSubmit}>
              <h4>Título</h4>
              <Input
                type="text"
                placeholder="Título"
                className="form-control"
                name="title"
              />
              <br />
              <h4>Descrição</h4>
              <Input
                placeholder="Escreva uma descrição"
                className="form-control"
                name="description"
              />

              <br />
              <button type="submit" className="btn btn-success">
                Perguntar
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Newspaper;
