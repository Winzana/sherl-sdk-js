import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IClaimOpinionInput } from '../types';
import { StringUtils } from '../../common/utils/string';
import { OpinionErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Create a claim related to an opinion.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} opinionId - The ID of the opinion to which the claim is related.
 * @param {IClaimOpinionInput} claim - The claim input data.
 * @returns {Promise<any>} A promise that resolves when the claim is successfully created.
 */

export const createOpinionClaim = async (
  fetcher: Fetcher,
  opinionId: string,
  claim: IClaimOpinionInput,
): Promise<any> => {
  try {
    const response = await fetcher.post<any>(
      StringUtils.bindContext(endpoints.CREATE_OPINION_CLAIM, {
        id: opinionId,
      }),
      claim,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OpinionErr.CREATE_OPINION_CLAIM_FORBIDDEN);
      case 404:
        throw errorFactory.create(OpinionErr.OPINION_NOT_FOUND);
      default:
        throw errorFactory.create(OpinionErr.CREATE_OPINION_CLAIM_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OpinionErr.CREATE_OPINION_CLAIM_FAILED),
    );
  }
};
