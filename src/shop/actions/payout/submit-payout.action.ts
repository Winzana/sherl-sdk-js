import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { PayoutErr, errorFactory } from '../../errors/payout/errors';
import { IPayout } from '../../types';

export const submitPayout = async (fetcher: Fetcher): Promise<IPayout> => {
  try {
    const response = await fetcher.post<IPayout>(endpoints.SUBMIT_PAYOUT, {});

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PayoutErr.SUBMIT_PAYOUT_FORBIDDEN);
      default:
        throw errorFactory.create(PayoutErr.SUBMIT_PAYOUT_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PayoutErr.SUBMIT_PAYOUT_FAILED),
    );
  }
};
