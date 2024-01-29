import { ErrorFactory } from '../common/errors';

export enum AuthErr {
  AUTH_FAILED = 'auth/auth-failed',
  AUTH_UNAUTHORIZED = 'auth/auth-unauthorized',
  LOGIN_FAILED = 'auth/login-failed',
  LOGIN_FAILED_UNAUTHORIZED = 'auth/login-failed-unauthorized',
  LOGIN_GOOGLE_FAILED = 'auth/google-login-failed',
  LOGIN_GOOGLE_FAILED_UNAUTHORIZED = 'auth/google-login-failed-unauthorized',
  LOGIN_FACEBOOK_FAILED = 'auth/facebook-login-failed',
  LOGIN_FACEBOOK_FAILED_UNAUTHORIZED = 'auth/facebook-login-failed-unauthorized',
  LOGIN_APPLE_FAILED = 'auth/apple-login-failed',
  LOGIN_APPLE_FAILED_UNAUTHORIZED = 'auth/apple-login-failed-unauthorized',
  LOGIN_WITH_CODE_FAILED = 'auth/login-with-code-failed',
  LOGIN_WITH_CODE_FAILED_UNAUTHORIZED = 'auth/login-with-code-failed-unauthorized',
  REQUEST_SMS_CODE_FAILED = 'auth/request-sms-code-failed',
  REQUEST_SMS_CODE_NOT_FOUND = 'auth/request-sms-code-failed-not-found',
  RE_REQUEST_SMS_CODE_FAILED = 'auth/re-request-sms-code-failed',
  VALIDATE_SMS_CODE_FAILED = 'auth/validate-sms-code-failed',
  VALIDATE_SMS_CODE_FAILED_UNAUTHORIZED = 'auth/validate-sms-code-failed-unauthorized',
  VALIDATE_SMS_CODE_FAILED_FORBIDDEN = 'auth/validate-sms-code-failed-forbidden',
  LOGOUT_FAILED = 'auth/logout-failed',
  LOGOUT_UNAUTHORIZED = 'auth/logout-unauthorized',
  SMS_ALREADY_SENT = 'auth/sms-already-sent',
  SMS_VALIDATION_CODE_EXPIRED = 'auth/validate-sms-code-failed-expired',
  PHONE_NUMBER_NOT_FOUND = 'auth/phone-number-not-found',
  SMS_CODE_OR_PHONE_NUMBER_NOT_FOUND = 'auth/phone-number-or-code-not-found',
  UNKNOWN_LOGIN_CODE = 'auth/unknown-login-code',
}
export const errors = {
  [AuthErr.AUTH_FAILED]: 'Could not authenticate',
  [AuthErr.AUTH_UNAUTHORIZED]: 'Could not authenticate, unauthorized',
  [AuthErr.LOGIN_FAILED]: 'Could not login',
  [AuthErr.LOGIN_FAILED_UNAUTHORIZED]: 'Could not login, unauthorized',
  [AuthErr.LOGIN_GOOGLE_FAILED]: 'Failed to connect with google',
  [AuthErr.LOGIN_GOOGLE_FAILED_UNAUTHORIZED]:
    'Failed to connect with google, unauthorized',
  [AuthErr.LOGIN_FACEBOOK_FAILED]: 'Failed to connect with facebook',
  [AuthErr.LOGIN_FACEBOOK_FAILED_UNAUTHORIZED]:
    'Failed to connect with facebook, unauthorized',
  [AuthErr.LOGIN_APPLE_FAILED]: 'Failed to connect with apple',
  [AuthErr.LOGIN_APPLE_FAILED_UNAUTHORIZED]:
    'Failed to connect with apple, unauthorized',
  [AuthErr.LOGIN_WITH_CODE_FAILED]: 'Failed to connect with code',
  [AuthErr.LOGIN_WITH_CODE_FAILED_UNAUTHORIZED]:
    'Failed to connect with code, unauthorized',
  [AuthErr.REQUEST_SMS_CODE_FAILED]: 'Failed to request sms code',
  [AuthErr.REQUEST_SMS_CODE_NOT_FOUND]: 'Failed to request sms code, not found',
  [AuthErr.RE_REQUEST_SMS_CODE_FAILED]: 'Failed to re-request sms code',
  [AuthErr.VALIDATE_SMS_CODE_FAILED]: 'Failed to connect validate sms code',
  [AuthErr.VALIDATE_SMS_CODE_FAILED_UNAUTHORIZED]:
    'Failed to connect validate sms code, unauthorized',
  [AuthErr.VALIDATE_SMS_CODE_FAILED_FORBIDDEN]:
    'Failed to connect validate sms code, forbidden',
  [AuthErr.LOGOUT_FAILED]: 'Failed to logout',
  [AuthErr.LOGOUT_UNAUTHORIZED]: 'Failed to logout, unauthorized',
  [AuthErr.SMS_ALREADY_SENT]: 'SMS already sent',
  [AuthErr.SMS_VALIDATION_CODE_EXPIRED]: 'SMS validation code expired',
  [AuthErr.PHONE_NUMBER_NOT_FOUND]: 'Phone number not found',
  [AuthErr.SMS_CODE_OR_PHONE_NUMBER_NOT_FOUND]:
    'Phone number or SMS code not found',
  [AuthErr.UNKNOWN_LOGIN_CODE]: 'Unknown login code',
};

export const errorFactory = new ErrorFactory<AuthErr>('Auth', errors);
