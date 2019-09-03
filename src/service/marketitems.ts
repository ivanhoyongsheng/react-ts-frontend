import fakeItems from '../fakedata/fakeitems.json';

export interface IItemForSale {
  name: string;
  price: number;
  quantity: number;
  image: string;
}
export const getItemsForSale = async (): Promise<IItemForSale[]> => {
  // placeholder service, replace with API call if needed
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Promise.resolve(fakeItems);
};
