import { ConfigApi } from '../api/client';
import { ConfigErr, errorFactory } from '../errors';
import { ApiConfigResponse } from '../types';

export const setConfigValue = async (
  code: string,
  isPublic: boolean,
  value: boolean,
  appliedTo: string,
): Promise<ApiConfigResponse> => {
  const response = await ConfigApi.postRequestSetConfigValue(
    code,
    isPublic,
    value,
    appliedTo,
  );

  if (!response.data) {
    throw errorFactory.create(ConfigErr.SET_CONFIG_VALUE_FAILED);
  }

  return response.data;
};
