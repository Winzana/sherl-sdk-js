import { AuthProvider } from '../provider';
import * as action from '../actions/signin-credentials.action';
import { registerBearerToken } from '../../common/api';
import { SherlClient } from '../../common';

jest.mock('../../common/api', () => ({
  ...jest.requireActual('../../common/api'),
  registerBearerToken: jest.fn(),
}));

const testClient = new SherlClient({ apiKey: '', apiSecret: '' });

describe('AuthProvider', () => {
  let provider: AuthProvider;

  beforeEach(() => {
    provider = new AuthProvider(testClient);
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
    expect(registerBearerToken).toHaveBeenCalledWith(
      expect.anything(),
      expectedToken,
    );
    expect(result).toEqual(expectedToken);
  });
});
