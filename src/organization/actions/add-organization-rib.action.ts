import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { IAddRibBody, IRib } from '../../shop/types';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';

export const addOrganizationRib = async (
  fetcher: Fetcher,
  id: string,
  body: IAddRibBody,
): Promise<IRib> => {
  const response = await fetcher
    .post<IRib>(
      StringUtils.bindContext(endpoints.ORGANIZATION_DOCUMENTS, { id }),
      body,
    )
    .catch((_err) => {
      throw errorFactory.create(OrganizationErr.FAILED_ADD_ORGANIZATION_RIB);
    });

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.FAILED_ADD_ORGANIZATION_RIB);
  }

  return response.data;
};
