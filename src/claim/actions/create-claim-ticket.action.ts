import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim, IClaimCreate } from '../types';

export const createClaimTicket = async (
  fetcher: Fetcher,
  id: string,
  params: Partial<IClaimCreate>,
): Promise<IClaim> => {
  try {
    const response = await fetcher.post<IClaim>(
      StringUtils.bindContext(endpoints.CLAIM_ID, { id }),
      params,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(ClaimErr.CREATE_CLAIM_FORBIDDEN_ERROR);
      case 404:
        throw errorFactory.create(ClaimErr.CREATE_CLAIM_NOT_FOUND_ERROR);
      default:
        throw errorFactory.create(ClaimErr.CREATE_CLAIM_ERROR);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(ClaimErr.CREATE_CLAIM_ERROR));
  }
};
