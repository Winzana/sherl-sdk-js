import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateThirdPartyRequest, IThirdPartyResponse } from '../types';

export const updateThirdParty = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IUpdateThirdPartyRequest,
): Promise<IThirdPartyResponse> => {
  const response = await fetcher.put<IThirdPartyResponse>(
    StringUtils.bindContext(endpoints.UPDATE_THIRD_PARTY, {
      organizationId,
    }),
    request,
  );

  if (response.status !== 200) {
    if (response.status == 500) {
      throw errorFactory.create(OrganizationErr.UPDATE_THIRD_PARTY_IMPOSSIBLE);
    }
    throw errorFactory.create(OrganizationErr.UPDATE_THIRD_PARTY_FAILED);
  }

  return response.data;
};
