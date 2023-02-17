import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateThirdPartyRequest, IThirdPartyResponse } from '../types';

export const updateThirdParty = async (
  fetcher: Fetcher,
  request: IUpdateThirdPartyRequest,
): Promise<IThirdPartyResponse> => {
  const response = await fetcher.put<IUpdateThirdPartyRequest>(
    endpoints.UPDATE_THIRD_PARTY,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_THIRD_PARTY_FAILED);
  }

  return response.data;
};
