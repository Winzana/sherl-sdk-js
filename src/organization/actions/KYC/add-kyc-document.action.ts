import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { StringUtils } from '../../../common/utils/string';
import { IAddKYCDocument, IKYCDocument } from '../../types';
import { filterSherlError } from '../../../common/utils/error';

export const addKycDocument = async (
  fetcher: Fetcher,
  organizationId: string,
  document: IAddKYCDocument,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IKYCDocument> => {
  try {
    const response = await fetcher.post<IKYCDocument>(
      StringUtils.bindContext(endpoints.ADD_DOCUMENT, {
        organizationId,
      }),
      document,
      undefined,
      {
        onUploadProgress,
      },
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED),
    );
  }
};
