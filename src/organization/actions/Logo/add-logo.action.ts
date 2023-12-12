import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
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

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.ADD_LOGO_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ADD_LOGO_NOT_FOUND);
      case 409:
        throw errorFactory.create(OrganizationErr.ADD_LOGO_ALREADY_EXISTS);
      default:
        throw errorFactory.create(OrganizationErr.ADD_LOGO_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(OrganizationErr.ADD_LOGO_FAILED),
    );
    throw filteredError;
  }
};
