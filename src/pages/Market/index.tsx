import React from 'react';
import ItemFormSale from './ItemFormSale';
import fakeItems from '../../fakedata/fakeitems.json';
import { Grid } from 'semantic-ui-react';
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
    return (
      <div>
        Market Place (once user is "logged in") a. As a user, I want to see a list/grid of items currently for sale
        <br />
        <Grid container columns={6}>
          {fakeItems.map((item, i: React.ReactText) => (
            <Column key={i}>
              <ItemFormSale item={item} />
            </Column>
          ))}
        </Grid>
      </div>
    );
  }
}
export default Market;
