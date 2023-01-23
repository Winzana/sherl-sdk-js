import { ApiResponse, Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse } from '../types';

export const getOrganization = async (
  fetcher: Fetcher,
  id: string,
): Promise<IOrganizationResponse> => {
  let response: ApiResponse<IOrganizationResponse> | null = null;

  try {
    response = await fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_ORGANIZATION, { id }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
