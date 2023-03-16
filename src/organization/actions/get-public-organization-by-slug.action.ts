import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse } from '../types';
import { ApiResponse } from "../../common";

export const getPublicOrganizationBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IOrganizationResponse> => {
  let response: ApiResponse<IOrganizationResponse> | null = null;

  try {
    response = await fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_SLUG, { slug }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
