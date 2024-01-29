import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils/errors';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim } from '../types';

/**
 * Makes a refund following a claim.
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ClaimErr.REFUND_CLAIM_FORBIDDEN);
      case 404:
        throw errorFactory.create(ClaimErr.CLAIM_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ClaimErr.REFUND_CLAIM_FAILED),
        );
    }
  }
};
