import { ErrorFactory } from '../common/errors';

export enum UserErr {
  PUT_FAILED = 'put-user-failed',
  POST_FAILED = 'post-user-failed',
  UPDATE_MY_PASSWORD_FAILED = 'update-password-failed',
}

export const errors = {
  'fetch-failed': 'Failed to fetch user API',
  'not-found': 'User not found',
  [UserErr.PUT_FAILED]: 'Failed to update user',
  [UserErr.POST_FAILED]: 'Failed to post user',
  [UserErr.UPDATE_MY_PASSWORD_FAILED]: 'Failed to update password',
};

export const errorFactory = new ErrorFactory<UserErr>('user', 'User', errors);
