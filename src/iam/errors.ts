import { ErrorFactory } from '../common/errors';

export enum IamErr {
  FETCH_FAILED = 'iam/fetch-failed',
  IAM_PROFILE_NOT_FOUND_ERROR = 'iam/fetch-failed-profile-not-found',
  IAM_GET_PROFILE_BY_ID_FORBIDDEN = 'iam/fetch-profile-by-id-failed-forbidden',
  IAM_ROLE_NOT_FOUND_ERROR = 'iam/fetch-failed-role-not-found',
  IAM_GET_ROLE_BY_ID_FORBIDDEN = 'iam/fetch-role-by-id-failed-forbidden',
  IAM_GET_ALL_FORBIDDEN = 'iam/fetch-failed-forbidden',
}

export const errors = {
  [IamErr.FETCH_FAILED]: 'Failed to fetch iam profiles',
  [IamErr.IAM_PROFILE_NOT_FOUND_ERROR]:
    'Failed to fetch iam profile, profile not found',
  [IamErr.IAM_GET_PROFILE_BY_ID_FORBIDDEN]:
    'Failed to fetch iam profile by id, forbidden',
  [IamErr.IAM_ROLE_NOT_FOUND_ERROR]: 'Failed to fetch iam role, role not found',
  [IamErr.IAM_GET_ROLE_BY_ID_FORBIDDEN]:
    'Failed to fetch iam role by id, forbidden',
  [IamErr.IAM_GET_ALL_FORBIDDEN]: 'Failed to fetch iam profiles, forbidden',
};

export const errorFactory = new ErrorFactory<IamErr>('Iam', errors);
