import { ErrorFactory } from '../common/errors';

export enum AccountErr {
  CREATE_ACCOUNT_FAILED = 'account/create-account-failed',
  CREATE_ACCOUNT_FORBIDDEN = 'account/create-account-forbidden',
}

export const errors = {
  [AccountErr.CREATE_ACCOUNT_FAILED]: 'Failed to create account',
  [AccountErr.CREATE_ACCOUNT_FORBIDDEN]:
    'Failed to create account. Forbidden access',
};

export const errorFactory = new ErrorFactory<AccountErr>('Account', errors);
