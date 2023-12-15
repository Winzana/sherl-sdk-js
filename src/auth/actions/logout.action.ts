import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';

export const logout = async (fetcher: Fetcher): Promise<string> => {
  try {
    const response = await fetcher.get<string>(endpoints.LOGOUT);

    return response.data;
  } catch (err) {
    throw getSherlError(err, errorFactory.create(AuthErr.LOGOUT_FAILED));
  }
};
