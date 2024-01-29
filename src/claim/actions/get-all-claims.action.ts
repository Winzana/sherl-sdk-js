import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { Pagination } from '../../common/types/response';

import { IClaim, IClaimTicketFilters } from '../types/entities';
import { ClaimErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils/errors';

/**
 * Retrieves all claims based on the provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make HTTP requests.
 * @param {IClaimTicketFilters} filters - The filters to apply to the claims.
 * @return {Promise<Pagination<IClaim>>} - A promise that resolves to a pagination object containing the claims.
 */
export const getAllClaims = async (
  fetcher: Fetcher,
  filters: IClaimTicketFilters,
): Promise<Pagination<IClaim>> => {
  try {
    const response = await fetcher.get<Pagination<IClaim>>(endpoints.CLAIMS, {
      ...filters,
    });

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ClaimErr.GET_ALL_CLAIM_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ClaimErr.GET_ALL_CLAIM_FAILED),
        );
    }
  }
};
