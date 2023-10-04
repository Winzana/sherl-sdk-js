import { SherlClient } from '../common';
import { VirtualMoneyProvider } from './provider';
import {
  ICreateWalletHistoricalInputDto,
  ICreateWalletInputDto,
  ITransferWalletInputDto,
  IWallet,
  IWalletHistorical,
} from './types';

const virtualMoney = (client: SherlClient) => new VirtualMoneyProvider(client);
export {
  virtualMoney,
  ICreateWalletHistoricalInputDto,
  ICreateWalletInputDto,
  ITransferWalletInputDto,
  IWallet,
  IWalletHistorical,
};
