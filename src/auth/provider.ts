import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  signInWithEmailAndPassword,
  logout,
  refreshToken,
  validateCode,
  sendSMSCode,
  resendSMSCode,
  loginWithGoogle,
  loginWithApple,
  loginWithFacebook,
  loginWithCode,
} from './actions';
import { errorFactory } from './errors';

class AuthProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Sign in a user with their email and password.
   *
   * @param {ISignInWithEmailAndPasswordRequest} request - An object containing email and password.
   * @returns {Promise<string>} A promise that resolves to an access token if the login is successful.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/etl#sign-in-email-password Sherl SDK documentation} for further information
   */
  public signInWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    const token = await signInWithEmailAndPassword(this.fetcher, {
      email,
      password,
    });
    this.registerToken(token);
    return token;
  };

  public registerToken = (accessToken: string): void => {
    this.client.registerAuthToken(accessToken);
  };

  /**
   * Refresh the authentication token.
   *
   * @returns {Promise<string>} A promise that resolves to a new access token.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#refresh-authentification-token Sherl SDK documentation} for further information
   */
  public refreshToken = async () => {
    const token = await refreshToken(this.fetcher);
    this.registerToken(token.access_token);
    return token;
  };

  /**
   * Log out the user.
   *
   * @returns {Promise<string>} A promise that resolves to a string indicating the success of the logout operation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#log-the-user Sherl SDK documentation} for further information
   */
  public logout = async () => {
    await logout(this.fetcher);
    this.client.revokeAuthToken();
  };

  /**
   * Validate an SMS code sent to a mobile phone number.
   *
   * @param {string} mobilePhoneNumber - The mobile phone number to which the SMS code was sent.
   * @param {string} code - The SMS validation code to be validated.
   * @returns {Promise<ILoginResponse>} A promise that resolves to a login response if the code is valid.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#validate-code Sherl SDK documentation} for further information
   */
  public validateCode = this.withFetcher(validateCode);

  /**
   * Send an SMS verification code to the provided mobile phone number.
   *
   * @param {string} mobilePhoneNumber - The mobile phone number to which the SMS code should be sent.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the send operation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#send-sms-code  Sherl SDK documentation} for further information
   */
  public sendSMSCode = this.withFetcher(sendSMSCode);

  /**
   * Resend an SMS verification code to the provided mobile phone number.
   *
   * @param {string} mobilePhoneNumber - The mobile phone number to which the SMS code should be resent.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the resend operation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#resend-sms-code Sherl SDK documentation} for further information
   */
  public resendSMSCode = this.withFetcher(resendSMSCode);

  /**
   * Log in using Google authentication.
   *
   * @param {IAuthExternalServiceUserInfo} googleInfos - Google user information used for authentication.
   * @returns {Promise<ILoginResponse>} A promise that resolves to an ILoginResponse containing authentication tokens.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#login-with-differents-providers Sherl SDK documentation} for further information
   */

  public loginWithGoogle = this.withFetcher(loginWithGoogle);

  /**
   * Log in using Apple authentication.
   *
   * @param {IAuthExternalServiceUserInfo} appleInfos - Apple authentication information.
   * @returns {Promise<ILoginResponse>} A promise that resolves to an ILoginResponse containing authentication tokens.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#login-with-differents-providers Sherl SDK documentation} for further information
   */
  public loginWithApple = this.withFetcher(loginWithApple);

  /**
   * Log in using Facebook authentication.
   *
   * @param {IAuthExternalServiceUserInfo} facebookInfos - Facebook user information used for authentication.
   * @returns {Promise<ILoginResponse>} A promise that resolves to an ILoginResponse containing authentication tokens.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#login-with-differents-providers Sherl SDK documentation} for further information
   */
  public loginWithFacebook = this.withFetcher(loginWithFacebook);

  /**
   * Log in using a code.
   *
   * @param {string} code - The code used for authentication.
   * @returns {Promise<ILoginResponse>} A promise that resolves to an ILoginResponse containing authentication tokens.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/auth#login-with-code Sherl SDK documentation} for further information
   */
  public loginWithCode = this.withFetcher(loginWithCode);
}

export { AuthProvider };
