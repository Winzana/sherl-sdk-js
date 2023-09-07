import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim } from '../types';

//TODO replace with the goods entities
export const getClaimById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IClaim> => {
  const response = await fetcher
    .get<IClaim>(StringUtils.bindContext(endpoints.GET_CLAIM_BY_ID, { id }))
    .catch((_err) => {
      throw errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_FAILED);
    });

  if (response.status !== 200) {
    throw errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_FAILED);
  }

  return response.data;
};
