import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ILogoResponse, ILogo } from '../../types';

export const addLogo = async (
  fetcher: Fetcher,
  organizationId: string,
  mediaId: string,
  request: ILogo,
): Promise<ILogoResponse> => {
  try {
    const response = await fetcher.post<ILogoResponse>(
      StringUtils.bindContext(endpoints.ADD_LOGO, {
        organizationId,
        mediaId,
      }),
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
