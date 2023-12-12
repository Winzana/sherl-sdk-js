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

    if (response.status == 404) {
      throw errorFactory.create(ClaimErr.FIND_CLAIM_BY_NOT_FOUND_ERROR);
    }

    if (response.status !== 200) {
      throw errorFactory.create(ClaimErr.FIND_CLAIM_BY_FAILED);
    }
    return response.data;
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ClaimErr.FIND_CLAIM_BY_FAILED),
    );
  }
};
