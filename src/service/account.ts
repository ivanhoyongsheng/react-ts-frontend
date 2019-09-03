import accountData from '../fakedata/account.json';

export interface IAccountData {
  name: string;
  birthday: number;
  education: string;
  about: string;
}

export const getAccountData = async (): Promise<IAccountData> => {
  // placeholder service, replace with API call if needed
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Promise.resolve(accountData);
};

interface IResponse {
  // dummy status response
  status: 'ok' | 'fail';
}

export interface IChangeAccountPasswordParams {
  password: string;
  confirmPassword: string;
}

export const changeAccountPassword = async (params: IChangeAccountPasswordParams): Promise<IResponse> => {
  // placeholder service, replace with API call if needed
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Promise.resolve({ status: 'ok' });
};
