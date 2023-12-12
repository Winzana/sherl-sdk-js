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
    if (response.status == 404) {
      throw errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_NOT_FOUND_ERROR);
    }
    if (response.status !== 200) {
      throw errorFactory.create(ClaimErr.GET_ALL_FAILED);
    }

    return response.data;
  } catch (err) {
    throw getSherlError(err, errorFactory.create(ClaimErr.GET_ALL_FAILED));
  }
};
