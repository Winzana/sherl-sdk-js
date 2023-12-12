import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { IImageObject } from '../../../media';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IKYCDocument } from '../../types';

export const updateKycDocument = async (
  fetcher: Fetcher,
  organizationId: string,
  kycId: string,
  document: IImageObject,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IKYCDocument> => {
  try {
    const response = await fetcher.put<IKYCDocument>(
      StringUtils.bindContext(endpoints.UPDATE_DOCUMENT, {
        organizationId,
        kycId,
      }),
      document,
      {
        onUploadProgress,
      },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.UPDATE_DOCUMENT_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.UPDATE_DOCUMENT_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.UPDATE_DOCUMENT_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(OrganizationErr.UPDATE_DOCUMENT_FAILED),
    );
    throw filteredError;
  }
};
