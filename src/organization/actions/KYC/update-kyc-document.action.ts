import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IUpdateDocument } from '../../types';

export const updateKycDocument = async (
  fetcher: Fetcher,
  organizationId: string,
  kycId: string,
  request: IUpdateDocument,
): Promise<IUpdateDocument> => {
  try {
    const response = await fetcher.put<IUpdateDocument>(
      StringUtils.bindContext(endpoints.UPDATE_DOCUMENT, {
        organizationId,
        kycId,
      }),
      request,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
  }
};
