import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { FindClaimBy, IClaim } from '../types';

export const findClaimBy = async (
  fetcher: Fetcher,
  filters?: FindClaimBy,
): Promise<IClaim> => {
  try {
    const response = await fetcher.get<IClaim>(endpoints.FIND_ONE_BY, filters);

    if (response.status !== 200) {
      throw errorFactory.create(ClaimErr.FIND_CLAIM_BY_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(ClaimErr.FIND_CLAIM_BY_FAILED);
  }
};
