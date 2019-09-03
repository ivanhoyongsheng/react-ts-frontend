import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

interface IItemForSale {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface IItemForSaleProps {
  item: IItemForSale;
}

const priceFormatter = (price: number) => {
  return `$${(price * 0.01).toFixed(2)}`;
};

const ItemFormSale = (props: IItemForSaleProps) => {
  const { name, image } = props.item;
  const quantity = Math.ceil(Math.random() * 50);
  const price = Math.ceil(Math.random() * 2000);
  return (
    <Card
      image={image}
      header={name}
      // meta="Friend"
      description={priceFormatter(price)}
      extra={<div>{quantity} in stock</div>}
    />
  );
};
export default ItemFormSale;
