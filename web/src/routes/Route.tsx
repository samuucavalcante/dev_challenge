import React from 'react';

import { Switch, Route as RouteDOM, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Newspaper from '../pages/Newspaper';

const Route: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <RouteDOM path="/" exact component={Dashboard} />
      <RouteDOM path="/newspaper" component={Newspaper} />
    </Switch>
  </BrowserRouter>
);
export default Route;
