import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IImageObject } from '../../../media';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IKYCDocument } from '../../types';

export const updateKycDocument = async (
  fetcher: Fetcher,
  organizationId: string,
  kycId: string,
  request: IImageObject,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IKYCDocument> => {
  try {
    const response = await fetcher.put<IKYCDocument>(
      StringUtils.bindContext(endpoints.UPDATE_DOCUMENT, {
        organizationId,
        kycId,
      }),
      request,
      {
        onUploadProgress,
      },
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.UPDATE_DOCUMENT_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.UPDATE_DOCUMENT_FAILED);
  }
};
