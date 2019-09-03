import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Market from './pages/Market';
import Account from './pages/Account';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/market" component={Market} />
      <Route path="/account" component={Account} />
      <Redirect to="/market" />
    </Switch>
  );
};

export default Routes;
