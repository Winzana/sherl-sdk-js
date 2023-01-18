import { signInWithEmailAndPassword } from './actions';

class AuthProvider {
  public token: string | undefined;

  public signInWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    const token = await signInWithEmailAndPassword(email, password);
    return token;
  };
}

export { AuthProvider };
