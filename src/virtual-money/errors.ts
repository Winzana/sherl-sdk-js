import { ErrorFactory } from '../common/errors';

export enum VirtualMoneyErr {
  FIND_ONE_WALLET_FAILED = 'virtual-money/find-one-wallet-failed',
  CREDIT_WALLET_FAILED = 'virtual-money/credit-wallet-failed',
}

export const errors = {
  [VirtualMoneyErr.FIND_ONE_WALLET_FAILED]: 'Failed to find wallet',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED]: 'Failed to credit wallet',
};

export const errorFactory = new ErrorFactory<VirtualMoneyErr>(
  'Virtual Money',
  errors,
);
