import React, { useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { Container, Error } from './styles';

import api from '../../services/api';

import Input from '../../components/Input';

const CreateNewspaper: React.FC = () => {
  const [errorArea, setErrorArea] = useState(''); 
  const [error, setError] = useState('');
  const [input, setInput] = useState(''); 
  const [inputArea, setInputArea] = useState('');

  const history = useHistory();

  useEffect(() => {
    document.title = 'Create | Newspaper';
  }, []);
  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        setError('');
        setErrorArea('');

        if (input.length < 7 || input.length > 70) {
          setError(
            `Um título deve conter entre 7-70 caracteres. Quantidade de caracteres atual: ${input.length}`,
          );
          return;
        }

        if (inputArea.length < 20 || inputArea.length > 500) {
          setErrorArea(
            `Uma descrição deve contaer entre 20-500 caracteres. Quantidade de caracteres atual: ${inputArea.length}`,
          );
          return;
        }
        await api.post('/newspaper', data);

        history.push('/');
      } catch (err) {
        setError('Bad request');
        setErrorArea('Bad request');
      }
    },
    [inputArea.length, input.length, history],
  );

  return (
    <Container className="container">
      <div className="container">
        <Link to="/" className="text-primary">
          Voltar
        </Link>
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
                onChange={(e: any) => setInput(e.target.value)}
                isArea={false}
                placeholder="Título"
                className="form-control"
                name="title"
              />
              {error && <Error>{error}</Error>}
              <br />
              <h4>Descrição</h4>
              <Input
                onChange={(e: any) => setInputArea(e.target.value)}
                isArea
                placeholder="Escreva uma descrição"
                className="form-control"
                name="description"
              />
              {errorArea && <Error>{errorArea}</Error>}
              <br />
              <button type="submit" className="btn btn-outline-success">
                Perguntar
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateNewspaper;
