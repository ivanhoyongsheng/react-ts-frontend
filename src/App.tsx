import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Market from './pages/Market';
import Account from './pages/Account';
import Login from './pages/Login';
import Menu from './Menu';

// interface IAppProps extends RouteComponentProps {}
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/market" component={Market} />
        <Route path="/account" component={Account} />
        <Redirect to="/" />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
