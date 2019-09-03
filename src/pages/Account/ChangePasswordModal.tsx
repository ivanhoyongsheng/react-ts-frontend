import React, { useState, useCallback } from 'react';
import { Modal, Form, Input, Message, Loader, Dimmer } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router';
import { changeAccountPassword, IChangeAccountPasswordParams } from '../../service/account';

const { Button } = Form;

interface IChangePasswordModalProps extends RouteComponentProps {
  toggleModal: () => void;
  open: boolean;
}
const ChangePasswordModal = (props: IChangePasswordModalProps) => {
  const { open, toggleModal } = props;

  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [changed, setChanged] = useState(false);

  const onChangeConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const errorNotMatch = password.length > 0 && confirmPassword.length > 0 && password !== confirmPassword;

  const errorEmpty =
    !(password.length === 0 && confirmPassword.length === 0) && (password.length === 0 || confirmPassword.length === 0);

  const handleSubmit = useCallback(
    async (_e: React.FormEvent<HTMLFormElement>) => {
      if (changed) {
        props.history.push('/logout');
      }
      if (errorNotMatch || errorEmpty) {
        // error
        return;
      } else {
        setLoading(true);
        const params: IChangeAccountPasswordParams = {
          password,
          confirmPassword
        };
        const res = await changeAccountPassword(params);
        if (res.status === 'ok') {
          setLoading(false);
          setChanged(true);
        }
      }
    },
    [errorNotMatch, errorEmpty, changed]
  );

  let error = '';
  if (errorNotMatch) {
    error = 'Passwords do not match.';
  } else if (errorEmpty) {
    error = 'Please fill in both fields.';
  }

  return (
    <Modal closeIcon onClose={changed ? (_e) => handleSubmit(null) : toggleModal} open={open}>
      <Modal.Header>Change Password</Modal.Header>
      <Modal.Content>
        {changed ? (
          <PasswordChangedContent handleSubmit={handleSubmit} />
        ) : loading ? (
          <Dimmer inverted active>
            <Loader inverted active />
          </Dimmer>
        ) : (
          <Form error={errorNotMatch || errorEmpty} onSubmit={handleSubmit} size="small">
            <Form.Field required>
              <label>New Password</label>
              <Input onChange={onChangePassword} value={password} type="password" control="input" />
            </Form.Field>
            <Form.Field required>
              <label>Confirm New Password</label>
              <Input onChange={onChangeConfirmPassword} value={confirmPassword} type="password" control="input" />
            </Form.Field>
            <Message error content={error} />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Modal.Content>
    </Modal>
  );
};

interface IPasswordChangedContentProps {
  handleSubmit: (e: any) => void;
}

const PasswordChangedContent: React.FC<IPasswordChangedContentProps> = (props: IPasswordChangedContentProps) => {
  return (
    <div style={{ minHeight: '80px' }}>
      <div>Your password has been changed. Click OK to log in again.</div>
      <Button floated="right" onClick={props.handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
export default withRouter(ChangePasswordModal);
