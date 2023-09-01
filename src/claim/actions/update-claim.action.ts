import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { errorFactory, ClaimErr } from '../errors';
import { IClaim, IClaimUpdate } from '../types';

export const updateClaim = async (
  fetcher: Fetcher,
  id: string,
  data: Partial<IClaimUpdate>,
): Promise<boolean> => {
  await fetcher
    .post<IClaim>(
      StringUtils.bindContext(endpoints.UPDATE_CLAIM_TICKET, { id }),
      data,
    )
    .catch(() => {
      throw errorFactory.create(ClaimErr.UPDATE_CLAIM_ERROR);
    });
  return true;
};
