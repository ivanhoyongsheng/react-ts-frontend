import React from 'react';
import { getAccountData, IAccountData } from '../../service/account';
import moment from 'moment';
import { MOMENT_FORMAT_DATE } from '../../util/misc';
import { Container } from 'semantic-ui-react';

interface IParsedAccountData extends IAccountData {
  age: string;
}

interface IAccountProps {}

interface IAccountState {
  loading: boolean;
  data: IParsedAccountData;
}

class Account extends React.PureComponent<IAccountProps, IAccountState> {
  constructor(props: IAccountProps) {
    super(props);
    this.state = {
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

  render() {
    const { data, loading } = this.state;
    return (
      <div>
        {loading === false && data !== null && (
          <Container>
            <p>
              3. Accountsdf
              <br />
              a. As a user, I want to see my information
              <br />
              i. {data && data.name}
              <br />
              ii. {data && moment(data.birthday).format(MOMENT_FORMAT_DATE)}
              <br />
              iii. {data && data.age}
              <br />
              iv. {data && data.education}
              <br />
              v. {data && data.about}
              <br />
              b. As a user, I want to change my password
              <br />
              i. Modal or separate screen to "change" password
            </p>
          </Container>
        )}
      </div>
    );
  }
}
export default Account;
