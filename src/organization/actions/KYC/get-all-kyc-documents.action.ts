import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IKYCDocument } from '../../types';

export const getAllKycDocuments = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IKYCDocument[]> => {
  try {
    const response = await fetcher.get<IKYCDocument[]>(
      StringUtils.bindContext(endpoints.GET_DOCUMENTS, { organizationId }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.GET_KYCS_FAILED);
    }
    return response.data;
  } catch {
    throw errorFactory.create(OrganizationErr.GET_KYCS_FAILED);
  }
};
