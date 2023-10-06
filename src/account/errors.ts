import { ErrorFactory } from '../common/errors';

export enum AccountErr {
  CREATE_ACCOUNT_FAILED = 'account/create-account-failed',
}

export const errors = {
  [AccountErr.CREATE_ACCOUNT_FAILED]: 'Failed to create account',
};

export const errorFactory = new ErrorFactory<AccountErr>('Account', errors);
