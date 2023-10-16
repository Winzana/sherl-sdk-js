/**
 * List of endpoints.
 */
export const endpoints = {
  LOGIN_WITH_CREDENTIALS: '/api/auth/login',
  REFRESH_TOKEN: '/api/auth/refresh-token',
  LOGOUT: '/api/auth/logout',
  LOGIN_GOOGLE: '/api/auth/login/google',
  LOGIN_FACEBOOK: '/api/auth/login/facebook',
  LOGIN_APPLE: '/api/auth/login/apple',
  VALIDATE_SMS_CODE: '/api/auth/login/sms/validate',
  REQUEST_SMS_CODE: '/api/auth/login/sms/request',
  RE_REQUEST_SMS_CODE: '/api/auth/login/sms/request-new',
  LOGIN_WITH_CODE: '/api/auth/login/code',
};
