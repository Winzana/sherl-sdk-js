import { ErrorFactory } from '../common/errors';

export enum UserErr {
  PUT_FAILED = 'user/put-user-failed',
  POST_FAILED = 'user/post-user-failed',
  UPDATE_MY_PASSWORD_FAILED = 'user/update-password-failed',
  RESET_PASSWORD_REQUEST_FAILED = 'user/reset-password-request-failed',
  RESET_PASSWORD_VALIDATE_FAILED = 'user/reset-password-failed',
  FETCH_FAILED = 'user/fetch-failed',
  NOT_FOUND = 'user/not-found',
  RESET_PASSWORD_REQUEST_FORBIDDEN = 'user/reset-password-request-forbidden',
  RESET_PASSWORD_REQUEST_NOT_FOUND = 'user/reset-password-request-not-found',

  RESET_PASSWORD_VALIDATE_FORBIDDEN = 'user/reset-password-validate-forbidden',
  RESET_PASSWORD_VALIDATE_NOT_FOUND = 'user/reset-password-validate-not-found',

  UPDATE_MY_PASSWORD_FORBIDDEN = 'user/update-my-password-forbidden',
  UPDATE_MY_PASSWORD_NOT_FOUND = 'user/update-my-password-not-found',
}

export const errors = {
  [UserErr.FETCH_FAILED]: 'Failed to fetch user API',
  [UserErr.NOT_FOUND]: 'User not found',
  [UserErr.PUT_FAILED]: 'Failed to update user',
  [UserErr.POST_FAILED]: 'Failed to post user',
  [UserErr.UPDATE_MY_PASSWORD_FAILED]: 'Failed to update password',
  [UserErr.RESET_PASSWORD_REQUEST_FAILED]: 'Failed to reset password',
  [UserErr.RESET_PASSWORD_VALIDATE_FAILED]: 'Failed to reset password',
  [UserErr.RESET_PASSWORD_REQUEST_FORBIDDEN]:
    'Failed to reset password forbidden',
  [UserErr.RESET_PASSWORD_REQUEST_NOT_FOUND]:
    'Failed to reset password not found ',

  [UserErr.RESET_PASSWORD_VALIDATE_FORBIDDEN]:
    'Failed to validate password forbidden',
  [UserErr.RESET_PASSWORD_VALIDATE_NOT_FOUND]:
    'Failed to validate password not found ',

  [UserErr.UPDATE_MY_PASSWORD_FORBIDDEN]: 'Failed to update passwordforbidden',
  [UserErr.UPDATE_MY_PASSWORD_NOT_FOUND]:
    'Failed to update password not found ',
};

export const errorFactory = new ErrorFactory<UserErr>('User', errors);
