import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { Pagination } from '../../common/types/response';

import { IClaim, IClaimTicketFilters } from '../types/entities';
import { ClaimErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils/errors';
import { SherlError } from '../../common';

export const getAllClaims = async (
  fetcher: Fetcher,
  filters: IClaimTicketFilters,
): Promise<Pagination<IClaim>> => {
  try {
    const response = await fetcher.get<Pagination<IClaim>>(endpoints.CLAIMS, {
      ...filters,
    });
    return response.data;
  } catch (err) {
    switch ((err as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ClaimErr.GET_ALL_FORBIDDEN_ERROR);
      default:
        throw errorFactory.create(ClaimErr.GET_ALL_FAILED);
    }
  }
};
