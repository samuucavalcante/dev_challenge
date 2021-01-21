import React from 'react';

import { Container, Header, Section, Footer } from './styles';

import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container className="container-fluid">
        <Header>
          <h1>Classificados</h1>
          <a href="/newspaper">+ Novo classificado</a>
        </Header>
        <Section>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
