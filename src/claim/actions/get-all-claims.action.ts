import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { Pagination } from '../../common/types/response';

import { IClaim, IClaimTicketFilters } from '../types/entities';
import { ClaimErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils/errors';

export const getAllClaims = async (
  fetcher: Fetcher,
  filters: IClaimTicketFilters,
): Promise<Pagination<IClaim>> => {
  try {
    const response = await fetcher.get<Pagination<IClaim>>(endpoints.CLAIMS, {
      ...filters,
    });

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ClaimErr.GET_ALL_FORBIDDEN_ERROR);
      case 404:
        throw errorFactory.create(ClaimErr.GET_ALL_NOT_FOUND_ERROR);
      default:
        throw errorFactory.create(ClaimErr.GET_ALL_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(ClaimErr.GET_ALL_FAILED));
  }
};
