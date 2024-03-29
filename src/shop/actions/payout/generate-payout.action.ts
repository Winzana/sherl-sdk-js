import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IPayout } from '../../types';

export const generatePayout = async (fetcher: Fetcher): Promise<IPayout[]> => {
  try {
    const response = await fetcher.post<IPayout[]>(
      endpoints.GENERATE_PAYOUT,
      {},
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.GENERATE_PAYOUT_FAILED);
  }
};
