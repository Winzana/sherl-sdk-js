import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.GET_KYCS_FORBIDDEN);
      default:
        throw errorFactory.create(OrganizationErr.GET_KYCS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.GET_KYCS_FAILED),
    );
  }
};
