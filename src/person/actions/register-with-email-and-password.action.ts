// import { PersonApi } from '../api/person.api';
import { IPersonMeResponse, IPersonRegister } from '../types';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';

export const registerWithEmailAndPassword = async (
  fetcher: Fetcher,
  data: IPersonRegister,
): Promise<IPersonMeResponse[]> => {
  try {
    console.log(data);
    const response = await fetcher
      .post<IPersonMeResponse[]>(endpoints.REGISTER_WITH_EMAIL_AND_PASSWORD, {
        ...data,
      })
      .catch(() => {
        throw errorFactory.create(PersonErr.POST_FAILED);
      });

    if (response.status !== 201) {
      throw errorFactory.create(PersonErr.POST_FAILED);
    }

    return response.data;
  } catch {
    throw new Error('Cannot reach API');
  }
};
