import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse } from '../types';

export const loginWithCode = async (
  fetcher: Fetcher,
  code: string,
): Promise<ILoginResponse> => {
  try {
    const response = await fetcher.post<ILoginResponse>(
      endpoints.LOGIN_WITH_CODE,
      { code },
    );

    if (!response.data.access_token) {
      throw errorFactory.create(AuthErr.LOGIN_WITH_CODE_FAILED);
    }

    return response.data;
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AuthErr.LOGIN_WITH_CODE_FAILED),
    );
  }
};
