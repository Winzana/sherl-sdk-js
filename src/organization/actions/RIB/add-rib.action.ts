import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IAddRibBody, IRib } from '../../../shop/types';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';

export const addRib = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IAddRibBody,
): Promise<IRib> => {
  try {
    const response = await fetcher.post<IRib>(
      StringUtils.bindContext(endpoints.ADD_RIB, {
        organizationId,
      }),
      request,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.ADD_RIB_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_RIB_FAILED);
  }
};
