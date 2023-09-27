import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

export const deleteBackgroundImage = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DELETE_BACKGROUND_IMAGE, {
        organizationId,
      }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED);
  }
};
