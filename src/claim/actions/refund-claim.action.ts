import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils/errors';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim } from '../types';

/**
 * Retrieves a claim refund using the provided fetcher and claim ID.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make the API call.
 * @param {string} id - The ID of the claim to refund.
 * @return {Promise<IClaim>} A promise that resolves to the refunded claim object.
 */
export const refundClaim = async (
  fetcher: Fetcher,
  id: string,
): Promise<IClaim> => {
  try {
    const response = await fetcher.post<IClaim>(
      StringUtils.bindContext(endpoints.REFUND_CLAIM, { id }),
      {},
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ClaimErr.REFUND_CLAIM_FORBIDDEN_ERROR);
      case 404:
        throw errorFactory.create(ClaimErr.CLAIM_NOT_FOUND);
      default:
        throw errorFactory.create(ClaimErr.REFUND_CLAIM_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(ClaimErr.REFUND_CLAIM_FAILED));
  }
};
