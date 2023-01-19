import { ApiResponse } from '../../common/api';
import { IOrganizationResponse } from '../types';
import { OrganizationApi } from '../api/client';

export const getPublicOrganization = async (
  id: string,
): Promise<IOrganizationResponse> => {
  let response: ApiResponse<IOrganizationResponse> | null = null;

  try {
    response = await OrganizationApi.getPublicOrganization(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
