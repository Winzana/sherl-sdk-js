import { initializeSherlApi, registerBearerToken } from '../common/api';
import { logout, signInWithEmailAndPassword, refreshToken } from './actions';

const axiosInstance = initializeSherlApi();

class AuthProvider {
  public token: string | undefined;

  public signInWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    const token = await signInWithEmailAndPassword(email, password);
    return token;
  };

  public registerToken = (accessToken: string): void => {
    this.token = accessToken;
    registerBearerToken(axiosInstance);
  };

  public refreshToken = async () => {
    const token = await refreshToken();
    this.registerToken(token);
    return token;
  };

  public logout = async () => {
    await logout();
    this.token = undefined;
  };
}

export { AuthProvider };
