import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

export const createBackgroundImage = async (
  fetcher: Fetcher,
  organizationId: string,
  mediaId: string,
  file: File,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IOrganizationResponse> => {
  try {
    const formData = new FormData();
    formData.append('upload', file);
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.CREATE_BACKGROUND_IMAGE, {
        organizationId,
        mediaId,
      }),
      formData,
      undefined,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress,
      },
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.CREATE_BACKGROUND_IMAGE_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(OrganizationErr.IMAGE_NOT_FOUND);
      default:
        throw errorFactory.create(
          OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED),
    );
  }
};
