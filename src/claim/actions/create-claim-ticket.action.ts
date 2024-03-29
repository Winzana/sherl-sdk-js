import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim, IClaimCreate } from '../types';

export const createClaimTicket = async (
  fetcher: Fetcher,
  id: string,
  params: Partial<IClaimCreate>,
): Promise<IClaim> => {
  const response = await fetcher
    .post<IClaim>(StringUtils.bindContext(endpoints.CLAIM_ID, { id }), params)
    .catch((_err) => {
      throw errorFactory.create(ClaimErr.CREATE_CLAIM_ERROR);
    });

  if (response.status !== 201) {
    throw errorFactory.create(ClaimErr.CREATE_CLAIM_ERROR);
  }
  return response.data;
};
