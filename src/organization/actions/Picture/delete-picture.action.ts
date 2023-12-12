import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

export const deletePicture = async (
  fetcher: Fetcher,
  organizationId: string,
  pictureId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DELETE_PICTURE, {
        organizationId,
        pictureId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.DELETE_PICTURE_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.DELETE_PICTURE_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.DELETE_PICTURE_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(OrganizationErr.DELETE_PICTURE_FAILED),
    );
    throw filteredError;
  }
};
