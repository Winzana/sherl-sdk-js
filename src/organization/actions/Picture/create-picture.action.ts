import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

export const createPicture = async (
  fetcher: Fetcher,
  organizationId: string,
  pictureId: string,
  picture: File,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IOrganizationResponse> => {
  try {
    const formData = new FormData();
    formData.append('upload', picture);
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.CREATE_PICTURE, {
        organizationId,
        pictureId,
      }),
      formData,
      undefined,
      {
        headers: {
          'Content-Type': 'mutlipart/form-data',
        },
        onUploadProgress,
      },
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.CREATE_PICTURE_NOT_FOUND);
      case 409:
        throw errorFactory.create(
          OrganizationErr.CREATE_PICTURE_ALREADY_EXISTS,
        );
      default:
        throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.CREATE_PICTURE_FAILED),
    );
  }
};
