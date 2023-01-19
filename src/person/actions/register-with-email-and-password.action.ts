import { PersonApi } from '../api/client';
import { IPersonMeResponse, IPersonRegister } from '../types';

export const registerWithEmailAndPassword = async (
  data: IPersonRegister,
): Promise<IPersonMeResponse[]> => {
  const response = await PersonApi.postRequestRegisterCredential(data);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
