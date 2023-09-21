import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IClaimOpinionInput } from '../types';
import { StringUtils } from '../../common/utils/string';
import { OpinionErr, errorFactory } from '../errors';

export const createOpinionClaim = async (
  fetcher: Fetcher,
  opinionId: string,
  claim: IClaimOpinionInput,
): Promise<any> => {
  const response = await fetcher.post<any>(
    StringUtils.bindContext(endpoints.CREATE_OPINION_CLAIM, { id: opinionId }),
    claim,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OpinionErr.CREATE_OPINION_CLAIM_FAILED);
  }

  return response.data;
};
