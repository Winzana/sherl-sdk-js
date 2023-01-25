import { ApiResponse, Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { IPasswordChange } from '../types';

export const postChangePassword = async (
  fetcher: Fetcher,
  parameter: Partial<IPasswordChange>,
): Promise<IPasswordChange> => {
  let response: ApiResponse<IPasswordChange> | null = null;

  try {
    response = await fetcher
      .post<IPasswordChange>(endpoints.POST_CHANGE_MY_PASSWORD, {
        ...parameter,
      })
      .catch(() => {
        throw errorFactory.create(PersonErr.POST_CHANGE_MY_PASSWORD_FAILED);
      });
  } catch ({ ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_CHANGE_MY_PASSWORD_FAILED);
  }

  return response.data;
};
