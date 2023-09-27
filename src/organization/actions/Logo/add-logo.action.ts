import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

export const addLogo = async (
  fetcher: Fetcher,
  organizationId: string,
  mediaId: string,
  logo: File,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IOrganizationResponse> => {
  try {
    const formData = new FormData();
    formData.append('upload', logo);
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.ADD_LOGO, {
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
      throw errorFactory.create(OrganizationErr.ADD_LOGO_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_LOGO_FAILED);
  }
};
