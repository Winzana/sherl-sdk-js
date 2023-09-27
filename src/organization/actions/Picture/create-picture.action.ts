import { Fetcher } from '../../../common/api';
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
      {
        headers: {
          'Content-Type': 'mutlipart/form-data',
        },
        onUploadProgress,
      },
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FAILED);
  }
};
