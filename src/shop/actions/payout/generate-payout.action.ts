import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { PayoutErr, errorFactory } from '../../errors/payout/errors';
import { IPayout } from '../../types';

/**
 * Generates payouts for orders.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<IPayout[]>} A promise that resolves to an array of payout details.
 */
export const generatePayout = async (fetcher: Fetcher): Promise<IPayout[]> => {
  try {
    const response = await fetcher.post<IPayout[]>(
      endpoints.GENERATE_PAYOUT,
      {},
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PayoutErr.GENERATE_PAYOUT_FAILED_FORBIDDEN);
      default:
        throw errorFactory.create(PayoutErr.GENERATE_PAYOUT_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PayoutErr.GENERATE_PAYOUT_FAILED),
    );
  }
};
