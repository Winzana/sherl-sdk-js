import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IUploadData } from '../../../media';
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

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED);
  }
};
