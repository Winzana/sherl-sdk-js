import { Fetcher } from '../../../common/api';
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

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.GET_RIBS_FAILED);
    }

    return response.data;
  } catch {
    throw errorFactory.create(OrganizationErr.FETCH_FAILED);
  }
};
