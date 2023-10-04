import { ErrorFactory } from '../common/errors';

export enum VirtualMoneyErr {
  FIND_ONE_WALLET_FAILED = 'virtual-money/find-one-wallet-failed',
  CREDIT_WALLET_FAILED = 'virtual-money/credit-wallet-failed',
  DEBIT_WALLET_FAILED = 'virtual-money/debit-wallet-failed',
  CREATE_WALLET_FAILED = 'virtual-money/create-wallet-failed',
  GET_ONE_WALLET_BY_ID_FAILED = 'virtual-money/get-wallet-failed',
}

export const errors = {
  [VirtualMoneyErr.FIND_ONE_WALLET_FAILED]: 'Failed to find wallet',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED]: 'Failed to credit wallet',
  [VirtualMoneyErr.DEBIT_WALLET_FAILED]: 'Failed to debit wallet',
  [VirtualMoneyErr.CREATE_WALLET_FAILED]: 'Failed to create wallet',
  [VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED]: 'Failed to get wallet by id',
};

export const errorFactory = new ErrorFactory<VirtualMoneyErr>(
  'Virtual Money',
  errors,
);
