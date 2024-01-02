import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IPayout } from '../../types';

/**
 * Submits a request for a payout.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<IPayout>} A promise that resolves to the details of the submitted payout.
 */
export const submitPayout = async (fetcher: Fetcher): Promise<IPayout> => {
  try {
    const response = await fetcher.post<IPayout>(endpoints.SUBMIT_PAYOUT, {});
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.PAYOUT_FAILED);
  }
};
