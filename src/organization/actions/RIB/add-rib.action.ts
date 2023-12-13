import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
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

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.ADD_RIB_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ADD_RIB_NOT_FOUND);
      case 409:
        throw errorFactory.create(OrganizationErr.ADD_RIB_ALREADY_EXISTS);
      default:
        throw errorFactory.create(OrganizationErr.ADD_RIB_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.ADD_RIB_FAILED),
    );
  }
};
