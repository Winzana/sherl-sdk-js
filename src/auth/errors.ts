import { ErrorFactory } from '../common/errors';

export enum AuthErr {
  LOGIN_FAILED = 'auth/login-failed',
  AUTH_FAILED = 'auth/auth-failed',
  LOGIN_GOOGLE_FAILED = 'auth/google-login-failed',
  LOGIN_FACEBOOK_FAILED = 'auth/facebook-login-failed',
  LOGIN_APPLE_FAILED = 'auth/apple-login-failed',
  LOGIN_WITH_CODE_FAILED = 'auth/login-with-code-failed',
  REQUEST_SMS_CODE_FAILED = 'auth/request-sms-code-failed',
  RE_REQUEST_SMS_CODE_FAILED = 'auth/re-request-sms-code-failed',
  VALIDATE_SMS_CODE_FAILED = 'auth/validate-sms-code-failed',
}
export const errors = {
  [AuthErr.LOGIN_FAILED]: 'Could not login',
  [AuthErr.AUTH_FAILED]: 'Could not authenticate',
  [AuthErr.LOGIN_GOOGLE_FAILED]: 'Failed to connect with google',
  [AuthErr.LOGIN_FACEBOOK_FAILED]: 'Failed to connect with facebook',
  [AuthErr.LOGIN_APPLE_FAILED]: 'Failed to connect with apple',
  [AuthErr.LOGIN_WITH_CODE_FAILED]: 'Failed to connect with code',
  [AuthErr.REQUEST_SMS_CODE_FAILED]: 'Failed to request sms code',
  [AuthErr.RE_REQUEST_SMS_CODE_FAILED]: 'Failed to re-request sms code',
  [AuthErr.VALIDATE_SMS_CODE_FAILED]: 'Failed to connect validate sms code',
};

export const errorFactory = new ErrorFactory<AuthErr>('Auth', errors);
