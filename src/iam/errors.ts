import { ErrorFactory } from '../common/errors';

export enum IamErr {
  FETCH_FAILED = 'iam/fetch-failed',
}

export const errors = {
  [IamErr.FETCH_FAILED]: 'Failed to fetch iam profiles',
};

export const errorFactory = new ErrorFactory<IamErr>('Iam', errors);
