import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWallet } from '../types';

/**
 * Retrieves a specific wallet based on the provided identifiers.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the wallet.
 * @param {string} personId - The identifier of the person associated with the wallet.
 * @param {string} consumerId - The identifier of the consumer associated with the wallet.
 * @returns {Promise<IWallet>} A promise that resolves to the information of the specific wallet.
 */
export const findOneWallet = async (
  fetcher: Fetcher,
  id: string,
  personId: string,
  consumerId: string,
): Promise<IWallet> => {
  try {
    const response = await fetcher.get<IWallet>(
      StringUtils.bindContext(endpoints.FIND_ONE_WALLET_BY, {
        id,
        personId,
        consumerId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          VirtualMoneyErr.FIND_ONE_WALLET_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(VirtualMoneyErr.FIND_ONE_WALLET_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(VirtualMoneyErr.FIND_ONE_WALLET_FAILED),
    );
  }
};
