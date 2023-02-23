import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ILogoResponse, ILogoRequest } from '../../types';

export const addLogo = async (
  fetcher: Fetcher,
  request: ILogoRequest,
): Promise<ILogoResponse> => {
  try {
    const response = await fetcher.post<ILogoResponse>(
      endpoints.ADD_LOGO,
      request,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.ADD_LOGO_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_LOGO_FAILED);
  }
};
