import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils/errors';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim } from '../types';

/**
 * Retrieves a claim by its ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used to make the HTTP request.
 * @param {string} id - The ID of the claim to retrieve.
 * @return {Promise<IClaim>} A promise that resolves to the retrieved claim.
 */
export const getClaimById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IClaim> => {
  try {
    const response = await fetcher.get<IClaim>(
      StringUtils.bindContext(endpoints.CLAIM_ID, { id }),
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(ClaimErr.CLAIM_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ClaimErr.GET_CLAIM_BY_ID_FAILED),
        );
    }
  }
};
