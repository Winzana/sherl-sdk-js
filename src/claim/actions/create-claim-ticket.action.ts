import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim, IClaimCreate } from '../types';

/**
 * Creates a claim ticket with the specified ID and parameters.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API requests.
 * @param {string} id - The ID of the claim ticket.
 * @param {Partial<IClaimCreate>} params - The parameters used to create the claim ticket.
 * @return {Promise<IClaim>} The created claim ticket.
 */
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ClaimErr.CREATE_CLAIM_FORBIDDEN);
      case 404:
        throw errorFactory.create(ClaimErr.CLAIM_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ClaimErr.CREATE_CLAIM_ERROR),
        );
    }
  }
};
