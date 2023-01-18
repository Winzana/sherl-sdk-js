import { getGlobalObject } from '../../common';
import { AuthApi } from '../api/client';
import { AuthErr, errorFactory } from '../errors';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<string> => {
  const response = await AuthApi.postRequestLoginCredential(email, password);

  if (!response.data.access_token) {
    throw errorFactory.create(AuthErr.LOGIN_FAILED);
  }

  const globalObject = getGlobalObject();
  globalObject.INSTANCE_TOKEN = response.data.access_token;

  return response.data.access_token;
};
