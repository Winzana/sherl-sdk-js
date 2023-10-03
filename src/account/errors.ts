import { ErrorFactory } from '../common/errors';

export enum AccountErr {
  CREATE_ACCOUNT_FAILED = 'bug-reports/create-bug-report-failed',
}

export const errors = {
  [AccountErr.CREATE_ACCOUNT_FAILED]: 'Failed to create account',
};

export const errorFactory = new ErrorFactory<AccountErr>('Account', errors);
