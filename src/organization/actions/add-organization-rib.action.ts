import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IAddRibBody } from '../types';

export const addOrganizationRib = async (
  fetcher: Fetcher,
  body: IAddRibBody,
  id: string,
): Promise<boolean> => {
  const response = await fetcher
    .post<boolean>(
      StringUtils.bindContext(endpoints.ORGANIZATION_DOCUMENTS, { id }),
      body,
    )
    .catch((_err) => {
      throw errorFactory.create(OrganizationErr.FAILED_ADD_ORGANIZATION_RIB);
    });

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.FAILED_ADD_ORGANIZATION_RIB);
  }

  return true;
};
