import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { StringUtils } from '../../../common/utils/string';
import { IAddKYCDocument, IKYCDocument } from '../../types';

export const addKycDocument = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IAddKYCDocument,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IKYCDocument> => {
  try {
    const response = await fetcher.post<IKYCDocument>(
      StringUtils.bindContext(endpoints.ADD_DOCUMENT, {
        organizationId,
      }),
      request,
      {
        onUploadProgress,
      },
    );

    if (response.status !== 201) {
      throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
  }
};
