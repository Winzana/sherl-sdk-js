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

  public refreshToken = async () => {
    const token = await refreshToken(this.fetcher);
    this.registerToken(token);
    return token;
  };

  public logout = async () => {
    await logout(this.fetcher);
    this.client.revokeAuthToken();
  };

  public validateCode = this.withFetcher(validateCode);
  public sendSMSCode = this.withFetcher(sendSMSCode);
  public resendSMSCode = this.withFetcher(resendSMSCode);
  public loginWithGoogle = this.withFetcher(loginWithGoogle);
  public loginWithApple = this.withFetcher(loginWithApple);
  public loginWithFacebook = this.withFetcher(loginWithFacebook);
  public loginWithCode = this.withFetcher(loginWithCode);
}

export { AuthProvider };
