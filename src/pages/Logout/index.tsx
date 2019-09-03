import React, { useEffect, useCallback } from 'react';
import { Form, Container } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
// import { push } from 'react-router'
const Input = Form.Input;
const Button = Form.Button;

const Logout = (props: RouteComponentProps) => {
  useEffect(() => {
    console.log('logout');
    window.localStorage.setItem('user', 'false');
    props.history.push('/login');
  });
  return (
    <div>
      <Container>logout</Container>
    </div>
  );
};
export default Logout;
