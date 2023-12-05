import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim } from '../types';

export const refundClaim = async (
  fetcher: Fetcher,
  id: string,
): Promise<IClaim> => {
  try {
    const response = await fetcher.post<IClaim>(
      StringUtils.bindContext(endpoints.REFUND_CLAIM, { id }),
      {},
    );

    if (response.status !== 200) {
      throw errorFactory.create(ClaimErr.REFUND_CLAIM_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(ClaimErr.REFUND_CLAIM_FAILED);
  }
};