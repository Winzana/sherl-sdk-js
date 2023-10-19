import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { Pagination } from '../../common/types/response';

import { IClaim, IClaimTicketFilters } from '../types/entities';
import { ClaimErr, errorFactory } from '../errors';

export const getAllClaims = async (
  fetcher: Fetcher,
  filters: IClaimTicketFilters,
): Promise<Pagination<IClaim>> => {
  const response = await fetcher
    .get<Pagination<IClaim>>(endpoints.CLAIMS, {
      ...filters,
    })
    .catch((_err) => {
      throw errorFactory.create(ClaimErr.GET_ALL_FAILED);
    });

  if (response.status !== 200) {
    throw errorFactory.create(ClaimErr.GET_ALL_FAILED);
  }

  return response.data;
};
