import { PersonApi } from '../api/client';
import { IPersonMeResponse, IPersonRegister } from '../types';

export const registerWithEmailAndPassword = async (
  data: IPersonRegister,
): Promise<IPersonMeResponse[]> => {
  const response = await PersonApi.postRequestRegisterCredential(data);

  if (response.status !== 201) {
    throw new Error(
      `Failed to register new user (status: ${response.status})`,
    );
  }

  return response.data;
};
