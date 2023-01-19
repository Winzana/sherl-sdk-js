import { ErrorFactory } from '../common/errors';

export enum AuthErr {
  LOGIN_FAILED = 'login-failed',
  AUTH_FAILED = 'auth-failed',
}
export const errors = {
  [AuthErr.LOGIN_FAILED]: 'Could not login',
  [AuthErr.AUTH_FAILED]: 'Could not authenticate',
};

export const errorFactory = new ErrorFactory<AuthErr>('auth', 'Auth', errors);
