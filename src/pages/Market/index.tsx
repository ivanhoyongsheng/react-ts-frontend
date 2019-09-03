import React from 'react';
import ItemFormSale from './ItemFormSale';
import fakeItems from '../../fakedata/fakeitems.json';
import { Grid, Container, Loader } from 'semantic-ui-react';
import { IItemForSale, getItemsForSale } from '../../service/marketitems';

const { Column } = Grid;

interface IMarketProps {}

interface IMarketState {
  loading: boolean;
  data: IItemForSale[];
}

class Market extends React.Component<IMarketProps, IMarketState> {
  constructor(props: IMarketProps) {
    super(props);
    this.state = {
      loading: false,
      data: null
    };
  }

  getData = async () => {
    try {
      this.setState({ loading: true });
      const res = await getItemsForSale();
      this.setState({ data: res, loading: false });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Grid container>
          <Column mobile={16}>
            <h1>Market Place</h1>
          </Column>
          <Loader active={loading} />
          {loading === false &&
            fakeItems.map((item, i: React.ReactText) => (
              <Column mobile={8} tablet={5} computer={3} key={i}>
                <ItemFormSale item={item} />
              </Column>
            ))}
        </Grid>
      </div>
    );
  }
}
export default Market;
