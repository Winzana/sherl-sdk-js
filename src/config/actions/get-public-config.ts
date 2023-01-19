import { ApiConfigResponse } from '../types';
import { ConfigApi } from '../api/client';
import { ConfigErr, errorFactory } from '../errors';

export const getPublicConfig = async (
  code: string,
): Promise<ApiConfigResponse> => {
  const response = await ConfigApi.getPublicConfig(code);

  if (!response.data) {
    throw errorFactory.create(ConfigErr.GET_CONFIG_VALUE_FAILED);
  }

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
