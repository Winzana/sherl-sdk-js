import { AuthProvider } from '../provider';
import * as action from '../actions/signin-credentials.action';
import { registerBearerToken } from '../../common/api';

jest.mock('../../common/api', () => ({
  ...jest.requireActual('../../common/api'),
  registerBearerToken: jest.fn(),
}));

describe('AuthProvider', () => {
  let provider: AuthProvider;

  beforeEach(() => {
    provider = new AuthProvider();
  });

  it('should sign in and register token', async () => {
    const expectedToken = 'token';
    jest
      .spyOn(action, 'signInWithEmailAndPassword')
      .mockImplementation(jest.fn(() => Promise.resolve(expectedToken)));

    const result = await provider.signInWithEmailAndPassword(
      'mail@example.com',
      'password',
    );

    expect(action.signInWithEmailAndPassword).toHaveBeenCalled();
    expect(provider.token).toEqual(expectedToken);
    expect(registerBearerToken).toHaveBeenCalledWith(expectedToken);
    expect(result).toEqual(expectedToken);
  });
});
