import { signInWithEmailAndPassword } from './signin-credentials.action';
import { AuthApi } from '../api/client';
import { AuthErr, errorFactory } from '../errors';

jest.mock('../errors', () => ({
  ...jest.requireActual('../errors'),
  errorFactory: {
    create: jest.fn(() => {
      throw new Error('error');
    }),
  },
}));

describe('signInWithEmailAndPassword', () => {
  it('should execute sign in request and return access token', async () => {
    jest
      .spyOn(AuthApi, 'postRequestLoginCredential')
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ data: { access_token: 'token' } } as any),
        ),
      );

    const response = await signInWithEmailAndPassword(
      'mail@example.com',
      'password',
    );

    expect(AuthApi.postRequestLoginCredential).toHaveBeenCalled();
    expect(response).toEqual('token');
  });

  it('should throw error if API response is empty', async () => {
    jest
      .spyOn(AuthApi, 'postRequestLoginCredential')
      .mockImplementation(
        jest.fn(() => Promise.resolve({ data: null } as any)),
      );

    let thrownError = null;

    try {
      await signInWithEmailAndPassword('mail@example.com', 'password');
    } catch (err) {
      thrownError = err;
    }

    expect(AuthApi.postRequestLoginCredential).toHaveBeenCalled();
    expect(errorFactory.create).toHaveBeenCalledWith(AuthErr.LOGIN_FAILED);
    expect(thrownError).not.toBeNull();
  });
});
