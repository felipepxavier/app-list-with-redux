import React from 'react';
import { Switch } from 'react-router-dom';

import Main from '../pages/Main';
import Create from '../pages/Create';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/cadastrar" exact component={Create} />
    </Switch>
  );
};
export default Routes;
