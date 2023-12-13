import { ErrorFactory } from '../common/errors';

export enum AuthErr {
  LOGIN_FAILED = 'auth/login-failed',
  AUTH_FAILED = 'auth/auth-failed',
  LOGIN_GOOGLE_FAILED = 'auth/google-login-failed',
  LOGIN_FACEBOOK_FAILED = 'auth/facebook-login-failed',
  LOGIN_APPLE_FAILED = 'auth/apple-login-failed',
  LOGIN_WITH_CODE_FAILED = 'auth/login-with-code-failed',
  REQUEST_SMS_CODE_FAILED = 'auth/request-sms-code-failed',
  REQUEST_SMS_CODE_NOT_FOUND = 'auth/request-sms-code-failed-not-found',
  RE_REQUEST_SMS_CODE_FAILED = 'auth/re-request-sms-code-failed',
  VALIDATE_SMS_CODE_FAILED = 'auth/validate-sms-code-failed',
  VALIDATE_SMS_CODE_NOT_FOUND = 'auth/validate-sms-code-failed-not-found',
  LOGOUT_FAILED = 'auth/logout-failed',
}
export const errors = {
  [AuthErr.LOGIN_FAILED]: 'Could not login',
  [AuthErr.AUTH_FAILED]: 'Could not authenticate',
  [AuthErr.LOGIN_GOOGLE_FAILED]: 'Failed to connect with google',
  [AuthErr.LOGIN_FACEBOOK_FAILED]: 'Failed to connect with facebook',
  [AuthErr.LOGIN_APPLE_FAILED]: 'Failed to connect with apple',
  [AuthErr.LOGIN_WITH_CODE_FAILED]: 'Failed to connect with code',
  [AuthErr.REQUEST_SMS_CODE_FAILED]: 'Failed to request sms code',
  [AuthErr.REQUEST_SMS_CODE_NOT_FOUND]: 'Failed to request sms code, not found',
  [AuthErr.RE_REQUEST_SMS_CODE_FAILED]: 'Failed to re-request sms code',
  [AuthErr.VALIDATE_SMS_CODE_FAILED]: 'Failed to connect validate sms code',
  [AuthErr.VALIDATE_SMS_CODE_NOT_FOUND]:
    'Failed to connect validate sms code, not found',
  [AuthErr.LOGOUT_FAILED]: 'Failed to logout',
};

export const errorFactory = new ErrorFactory<AuthErr>('Auth', errors);
