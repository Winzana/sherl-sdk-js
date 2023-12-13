import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils/errors';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim } from '../types';

export const getClaimById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IClaim> => {
  try {
    const response = await fetcher.get<IClaim>(
      StringUtils.bindContext(endpoints.CLAIM_ID, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_FORBIDDEN_ERROR);
      case 404:
        throw errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_NOT_FOUND_ERROR);
      default:
        throw errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_FAILED),
    );
  }
};
