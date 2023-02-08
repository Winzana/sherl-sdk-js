import { signInWithEmailAndPassword } from './signin-credentials.action';
import { AuthErr, errorFactory } from '../errors';
import { Fetcher } from '../../common/api';
import { ErrorFactory } from '../../common/errors';
import axios from 'axios';

jest.mock('../errors', () => ({
  ...jest.requireActual('../errors'),
  errorFactory: {
    create: jest.fn(() => {
      throw new Error('error');
    }),
  },
}));

const fetcher = new Fetcher(axios.create(), new ErrorFactory('Test'));

describe('signInWithEmailAndPassword', () => {
  it('should execute sign in request and return access token', async () => {
    jest
      .spyOn(fetcher, 'post')
      .mockImplementationOnce(
        jest.fn(() =>
          Promise.resolve({ data: { access_token: 'token' } } as any),
        ),
      );

    const payload = {
      email: 'mail@example.com',
      password: 'password',
    };

    const response = await signInWithEmailAndPassword(fetcher, payload);
    expect(fetcher.post).toHaveBeenCalledWith(expect.anything(), {
      username: payload.email,
      password: payload.password,
    });
    expect(response).toEqual('token');
  });
  it('should throw error if API response is empty', async () => {
    jest
      .spyOn(fetcher, 'post')
      .mockImplementationOnce(
        jest.fn(() => Promise.resolve({ data: null } as any)),
      );

    const payload = {
      email: 'mail@example.com',
      password: 'password',
    };

    let thrownError = null;
    try {
      await signInWithEmailAndPassword(fetcher, payload);
    } catch (err) {
      thrownError = err;
    }
    expect(fetcher.post).toHaveBeenCalledWith(expect.anything(), {
      username: payload.email,
      password: payload.password,
    });
    expect(errorFactory.create).toHaveBeenCalledWith(AuthErr.LOGIN_FAILED);
    expect(thrownError).not.toBeNull();
  });
});
