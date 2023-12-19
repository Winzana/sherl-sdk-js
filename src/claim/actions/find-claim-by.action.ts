import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { FindClaimFilter, IClaim } from '../types';

export const findClaimBy = async (
  fetcher: Fetcher,
  filters?: FindClaimFilter,
): Promise<IClaim> => {
  try {
    const response = await fetcher.get<IClaim>(endpoints.FIND_ONE_BY, filters);

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ClaimErr.FIND_CLAIM_BY_FORBIDDEN_ERROR);
      default:
        throw errorFactory.create(ClaimErr.FIND_CLAIM_BY_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ClaimErr.FIND_CLAIM_BY_FAILED),
    );
  }
};
