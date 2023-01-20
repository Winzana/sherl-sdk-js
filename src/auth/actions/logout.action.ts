import { AuthApi } from '../api/client';

export const logout = async (): Promise<void> => {
  await AuthApi.getLogout();
};
