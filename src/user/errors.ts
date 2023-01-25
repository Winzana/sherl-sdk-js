import { ErrorFactory } from '../common/errors';

export enum UserErr {
  PUT_FAILED = 'put-user-failed',
  POST_FAILED = 'post-user-failed',
  POST_CHANGE_MY_PASSWORD_FAILED = 'change-password-failed',
}

export const errors = {
  'fetch-failed': 'Failed to fetch user API',
  'not-found': 'User not found',
  [UserErr.PUT_FAILED]: 'Failed to update user',
  [UserErr.POST_FAILED]: 'Failed to post user',
  [UserErr.POST_CHANGE_MY_PASSWORD_FAILED]: 'Failed to change password',
};

export const errorFactory = new ErrorFactory<UserErr>('user', 'User', errors);
