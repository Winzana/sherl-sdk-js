import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ILogoResponse } from '../../types';

export const deleteLogo = async (
  fetcher: Fetcher,
  id: string,
  request: object,
): Promise<ILogoResponse> => {
  try {
    const response = await fetcher.post<ILogoResponse>(
      StringUtils.bindContext(endpoints.DELETE_LOGO, {
        id,
      }),
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
