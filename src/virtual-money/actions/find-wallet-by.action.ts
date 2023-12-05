import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWallet } from '../types';

/**
 * Retrieves a specific wallet based on the provided identifiers.
 *
 * This function sends a GET request to find a wallet using a combination of identifiers: the wallet's ID,
 * the associated person's ID, and the consumer's ID. These identifiers are used to construct the endpoint
 * for the GET request. If the wallet is found successfully, the function returns the wallet's information.
 * In case of any errors, such as a non-200 status response or other issues, a specific error indicating the
 * failure of finding the wallet is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the wallet.
 * @param {string} personId - The identifier of the person associated with the wallet.
 * @param {string} consumerId - The identifier of the consumer associated with the wallet.
 * @returns {Promise<IWallet>} A promise that resolves to the information of the specific wallet.
 * @throws {VirtualMoneyErr.FIND_ONE_WALLET_FAILED} Throws an error if the operation to find the wallet fails.
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
    if (response.status !== 200) {
      throw errorFactory.create(VirtualMoneyErr.FIND_ONE_WALLET_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.FIND_ONE_WALLET_FAILED);
  }
};
