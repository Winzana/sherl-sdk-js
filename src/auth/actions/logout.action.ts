import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';

export const logout = async (fetcher: Fetcher): Promise<string> => {
  await fetcher.get<string>(endpoints.LOGOUT);
  return '';
};
