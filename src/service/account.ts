import accountData from '../fakedata/account.json';

export interface IAccountData {
  name: string;
  birthday: number;
  education: string;
  about: string;
}
export const getAccountData = async (): Promise<IAccountData> => {
  // placeholder service, replace with API call if needed
  return Promise.resolve(accountData);
};
