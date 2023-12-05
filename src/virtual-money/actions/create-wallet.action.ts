import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ICreateWalletInputDto, IWallet } from '../types';

/**
 * Creates a new wallet using the provided data.
 *
 * This function sends a POST request to create a new wallet. The wallet creation data is
 * provided in the ICreateWalletInputDto object. On successful creation, it returns the newly created
 * wallet's information. If the creation process encounters any errors, such as a non-201 status response
 * or connectivity issues, a specific error indicating the failure of the wallet creation is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICreateWalletInputDto} data - The data for creating a new wallet.
 * @returns {Promise<IWallet>} A promise that resolves to the newly created wallet's information.
 * @throws {VirtualMoneyErr.CREATE_WALLET_FAILED} Throws an error if the wallet creation fails.
 */

export const createWallet = async (
  fetcher: Fetcher,
  data: ICreateWalletInputDto,
): Promise<IWallet> => {
  try {
    const response = await fetcher.post<IWallet>(endpoints.CREATE_WALLET, data);
    if (response.status !== 201) {
      throw errorFactory.create(VirtualMoneyErr.CREATE_WALLET_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.CREATE_WALLET_FAILED);
  }
};
