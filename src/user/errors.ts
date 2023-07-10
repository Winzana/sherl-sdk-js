import { ErrorFactory } from '../common/errors';

export enum UserErr {
  PUT_FAILED = 'user/put-user-failed',
  POST_FAILED = 'user/post-user-failed',
  UPDATE_MY_PASSWORD_FAILED = 'user/update-password-failed',
  RESET_PASSWORD_FAILED = 'user/reset-password-failed',
  FETCH_FAILED = 'user/fetch-failed',
  NOT_FOUND = 'user/not-found',
}

export const errors = {
  [UserErr.FETCH_FAILED]: 'Failed to fetch user API',
  [UserErr.NOT_FOUND]: 'User not found',
  [UserErr.PUT_FAILED]: 'Failed to update user',
  [UserErr.POST_FAILED]: 'Failed to post user',
  [UserErr.UPDATE_MY_PASSWORD_FAILED]: 'Failed to update password',
  [UserErr.RESET_PASSWORD_FAILED]: 'Failed to reset password',
};

export const errorFactory = new ErrorFactory<UserErr>('User', errors);
