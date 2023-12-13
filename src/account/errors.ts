import { ErrorFactory } from '../common/errors';

export enum AccountErr {
  CREATE_ACCOUNT_FAILED = 'account/create-account-failed',
  CREATE_ACCOUNT_FORBIDDEN = 'account/create-account-forbidden',
  CREATE_ACCOUNT_NOT_FOUND = 'account/create-account-not-found',
  CREATE_ACCOUNT_ALREADY_EXISTS = 'account/create-account-already-exists',
}

export const errors = {
  [AccountErr.CREATE_ACCOUNT_FAILED]: 'Failed to create account',
  [AccountErr.CREATE_ACCOUNT_FORBIDDEN]:
    'Failed to create account. Forbidden access',
  [AccountErr.CREATE_ACCOUNT_NOT_FOUND]:
    'Failed to create account. Page not found',
  [AccountErr.CREATE_ACCOUNT_ALREADY_EXISTS]:
    'Failed to create account. Account already exists',
};

export const errorFactory = new ErrorFactory<AccountErr>('Account', errors);
