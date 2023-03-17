import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ILogoResponse } from '../../types';

export const deleteLogo = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<ILogoResponse> => {
  try {
    const response = await fetcher.post<ILogoResponse>(
      StringUtils.bindContext(endpoints.DELETE_LOGO, {
        organizationId,
      }),
      {},
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
  }
};
