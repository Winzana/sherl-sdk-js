import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { StringUtils } from '../../../common/utils/string';
import { IAddRib } from '../../types';

export const addRib = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IAddRib,
): Promise<IAddRib> => {
  try {
    const response = await fetcher.post<IAddRib>(
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
