import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  signInWithEmailAndPassword,
  logout,
  refreshToken,
  signInWithGoogle,
} from './actions';
import { errorFactory } from './errors';
import { SignInWithGoogleRequest } from './types';

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

  public signInWithGoogle = async (request: SignInWithGoogleRequest) => {
    const token = await signInWithGoogle(this.fetcher, { ...request });
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
}

export { AuthProvider };
