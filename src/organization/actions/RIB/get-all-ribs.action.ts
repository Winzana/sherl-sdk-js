import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
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
      case 404:
        throw errorFactory.create(OrganizationErr.GET_RIBS_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.GET_RIBS_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(OrganizationErr.GET_RIBS_FAILED),
    );
    throw filteredError;
  }
};
