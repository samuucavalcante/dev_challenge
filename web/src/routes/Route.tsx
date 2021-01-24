import React from 'react';

import { Switch, Route as RouteDOM, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CreateNewspaper from '../pages/CreateNewspaper';
import Newspapers from '../pages/Newspapers';

const Route: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <RouteDOM path="/" exact component={Dashboard} />
      <RouteDOM path="/newspaper/create" component={CreateNewspaper} />
      <RouteDOM path="/newspaper/:id" component={Newspapers} />
    </Switch>
  </BrowserRouter>
);
export default Route;
