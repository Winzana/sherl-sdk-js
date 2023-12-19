import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IRib } from '../../types';

export const getAllRibs = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IRib[]> => {
  try {
    const response = await fetcher.get<IRib[]>(
      StringUtils.bindContext(endpoints.GET_RIB, { organizationId }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.GET_RIBS_FORBIDDEN);
      default:
        throw errorFactory.create(OrganizationErr.GET_RIBS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.GET_RIBS_FAILED),
    );
  }
};
