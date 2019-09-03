import React from 'react';
import { getAccountData, IAccountData } from '../../service/account';
import moment from 'moment';
import { MOMENT_FORMAT_DATE } from '../../util/misc';
import { Container, Item, Button, Icon, Loader, Responsive, Grid } from 'semantic-ui-react';
import ChangePasswordModal from './ChangePasswordModal';

interface IParsedAccountData extends IAccountData {
  age: string;
}

interface IAccountProps {}

interface IAccountState {
  loading: boolean;
  data: IParsedAccountData;
  modalOpen: boolean;
}

class Account extends React.PureComponent<IAccountProps, IAccountState> {
  constructor(props: IAccountProps) {
    super(props);
    this.state = {
      modalOpen: false,
      loading: false,
      data: null
    };
  }

  getData = async () => {
    try {
      this.setState({ loading: true });
      const res = await getAccountData();
      this.setState({ data: this.parseAbout(res), loading: false });
    } finally {
      this.setState({ loading: false });
    }
  };

  parseAbout = (data: IAccountData): IParsedAccountData => {
    const diff = moment.duration(moment().diff(data.birthday));
    // string format for age
    const age = `${diff.years()}`;
    return {
      age,
      ...data
    };
  };

  componentDidMount() {
    this.getData();
  }

  togglePasswordModal = (_e?: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const { data, loading, modalOpen } = this.state;
    const btn = (
      <Button size="mini" primary onClick={this.togglePasswordModal} floated="right">
        Change Password
      </Button>
    );
    return (
      <>
        {loading === false && data !== null ? (
          <Container>
            <h1>My Account</h1>
            <Item.Group>
              <Item>
                <Item.Image size="small" src="https://source.unsplash.com/random/150x150" />

                <Item.Content>
                  <Item.Header as="a">{data && data.name}</Item.Header>
                  <Responsive minWidth={568}>{btn}</Responsive>
                  <Item.Meta>
                    <Icon name="birthday" />
                    {data && moment(data.birthday).format(MOMENT_FORMAT_DATE)} ({data && data.age} years old)
                  </Item.Meta>
                  <Item.Extra>{data && data.education}</Item.Extra>
                  <Responsive maxWidth={567}>
                    <Button
                      style={{ width: '100%' }}
                      size="mini"
                      primary
                      onClick={this.togglePasswordModal}
                      floated="right"
                    >
                      Change Password
                    </Button>
                  </Responsive>
                  <Item.Description>{data && data.about}</Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Container>
        ) : (
          <Loader active={loading} />
        )}
        <ChangePasswordModal toggleModal={this.togglePasswordModal} open={modalOpen} />
      </>
    );
  }
}
export default Account;
