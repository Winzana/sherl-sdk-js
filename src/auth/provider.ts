import { registerBearerToken } from '../common/api';
import { signInWithEmailAndPassword, refreshToken } from './actions';

class AuthProvider {
  public token: string | undefined;

  public signInWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    const token = await signInWithEmailAndPassword(email, password);
    this.registerToken(token);
    return token;
  };

  public registerToken = (accessToken: string): void => {
    this.token = accessToken;
    registerBearerToken(accessToken);
  };

  public refreshToken = async () => {
    const token = await refreshToken();
    this.registerToken(token);
    return token;
  };
}

export { AuthProvider };
