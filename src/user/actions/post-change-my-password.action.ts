import { ApiResponse, Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPasswordChange } from '../../user/types';
import { errorFactory, UserErr } from '../errors';

export const postChangeMyPassword = async (
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
        throw errorFactory.create(UserErr.POST_CHANGE_MY_PASSWORD_FAILED);
      });
  } catch ({ ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (!response.data) {
    throw errorFactory.create(UserErr.POST_CHANGE_MY_PASSWORD_FAILED);
  }

  return response.data;
};
