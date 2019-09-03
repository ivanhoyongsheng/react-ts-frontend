import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Routes from './Routes';

import Login from './pages/Login';
import Logout from './pages/Logout';
import Menu from './Menu';

// interface IAppProps extends RouteComponentProps {}
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={() => {
            const hasUser = window.localStorage.getItem('user') === 'true';
            return hasUser ? <Routes /> : <Redirect to="/login" />;
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
