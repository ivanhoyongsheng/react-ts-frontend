import React, { useState, useCallback } from 'react';
import { Form, Container } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
const Input = Form.Input;
const Button = Form.Button;

const Login = (props: RouteComponentProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    (_e: React.FormEvent<HTMLFormElement>) => {
      // set user to logged in. can be replaced with better logic later
      window.localStorage.setItem('user', 'true');
      props.history.push('/market');
    },
    [props.history]
  );
  return (
    <div>
      <Container>
        <h1>Log in</h1>
        <Form onSubmit={handleSubmit} size="small">
          <Input onChange={onChangeEmail} value={email} control="input" label="Email" />
          <Input onChange={onChangePassword} value={password} type="password" control="input" label="Password" />
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </div>
  );
};
export default Login;
