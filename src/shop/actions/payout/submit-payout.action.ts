import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { PayoutErr, errorFactory } from '../../errors/payout/errors';
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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(PayoutErr.SUBMIT_PAYOUT_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(PayoutErr.SUBMIT_PAYOUT_FAILED),
        );
    }
  }
};
