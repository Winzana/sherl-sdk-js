import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ILogoRequest, ILogoResponse } from '../../types';

export const deleteLogo = async (
  fetcher: Fetcher,
  request: ILogoRequest,
): Promise<ILogoResponse> => {
  try {
    const response = await fetcher.post<ILogoResponse>(
      endpoints.DELETE_LOGO,
      request,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
  }
};
