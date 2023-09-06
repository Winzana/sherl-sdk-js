import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IGetAllOrganizationDocumentsResponse } from '../types';
import { StringUtils } from '../../common/utils/string';
import { errorFactory, OrganizationErr } from '../errors';

export const getAllOrganizationDocuments = async (
  fetcher: Fetcher,
  id: string,
): Promise<IGetAllOrganizationDocumentsResponse> => {
  const response = await fetcher
    .get<IGetAllOrganizationDocumentsResponse>(
      StringUtils.bindContext(endpoints.GET_ALL_ORGANIZATION_DOCUMENTS, { id }),
    )
    .catch((_err) => {
      throw errorFactory.create(OrganizationErr.FETCH_FAILED);
    });

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.FETCH_FAILED);
  }

  return response.data;
};
