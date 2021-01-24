import React, { useEffect, useState } from 'react';

import { Form, Button } from 'react-bootstrap';

import { useRouteMatch } from 'react-router-dom';
// import { Form } from '@unform/web';
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

  useEffect(() => {
    api.get(`/newspaper/${params.id}`).then((response) => {
      setNewspaper([response.data]);
    });
  }, [params.id]);

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Newspapers;
