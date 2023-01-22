import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ApiLoginResponse } from '../types';

export const logout = async (fetcher: Fetcher): Promise<void> => {
  await fetcher.get<ApiLoginResponse>(endpoints.LOGOUT);
};
