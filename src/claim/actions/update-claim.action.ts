import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils/errors';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { errorFactory, ClaimErr } from '../errors';
import { ClaimStatusEnum, IClaim } from '../types';

export const updateClaim = async (
  fetcher: Fetcher,
  id: string,
  status: ClaimStatusEnum,
): Promise<IClaim> => {
  try {
    const response = await fetcher.post<IClaim>(
      StringUtils.bindContext(endpoints.CLAIM_ID, { id }),
      {
        status,
      },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ClaimErr.UPDATE_CLAIM_FORBIDDEN_ERROR);
      case 404:
        throw errorFactory.create(ClaimErr.CLAIM_NOT_FOUND);
      default:
        throw errorFactory.create(ClaimErr.UPDATE_CLAIM_ERROR);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(ClaimErr.UPDATE_CLAIM_ERROR));
  }
};
