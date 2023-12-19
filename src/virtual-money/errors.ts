import { ErrorFactory } from '../common/errors';

export enum VirtualMoneyErr {
  VIRTUAL_MONEY_NOT_FOUND = 'virtula-money/not-found',
  FIND_ONE_WALLET_FAILED = 'virtual-money/find-one-wallet-failed',
  CREDIT_WALLET_FAILED = 'virtual-money/credit-wallet-failed',
  DEBIT_WALLET_FAILED = 'virtual-money/debit-wallet-failed',
  CREATE_WALLET_FAILED = 'virtual-money/create-wallet-failed',
  CREATE_WALLET_HISTORICAL_FAILED = 'virtual-money/create-wallet-historical-failed',
  GET_ONE_WALLET_BY_ID_FAILED = 'virtual-money/get-wallet-failed',
  GET_WALLET_HISTORICAL_FAILED = 'virtual-money/get-wallet-historical-failed',
  CREATE_WALLET_FAILED_CMS_NOT_EXIST = 'virtual-money/create-wallet-failed-cms-not-exist',
  CREDIT_WALLET_FAILED_CMS_NOT_EXIST = 'virtual-money/create-wallet-failed-cms-not-exist',
  DEBIT_WALLET_FAILED_CMS_NOT_EXIST = 'virtual-money/debit-wallet-failed-cms-not-exist',
  FIND_ONE_WALLET_FAILED_CMS_NOT_EXIST = 'virtual-money/find-one-wallet-cms-not-exist',
  GET_ONE_WALLET_BY_ID_FAILED_CMS_NOT_EXIST = 'virtual-money/one-wallet-by-id-cms-not-exist',
  GET_WALLET_HISTORICAL_FAILED_CMS_NOT_EXIST = 'virtual-money/get-wallet-historical-cms-not-exist',
  CREATE_WALLET_HISTORICAL_FORBIDDEN = 'virtual-money/create-wallet-historical-forbidden',
  CREATE_WALLET_FAILED_FORBIDDEN = 'virtual-money/create-wallet-failed-forbidden',
  CREDIT_WALLET_FAILED_FORBIDDEN = 'virtual-money/create-wallet-failed-forbidden',
  DEBIT_WALLET_FAILED_FORBIDDEN = 'virtual-money/debit-wallet-failed-forbidden',
  FIND_ONE_WALLET_FAILED_FORBIDDEN = 'virtual-money/find-one-wallet-forbidden',
  GET_ONE_WALLET_BY_ID_FAILED_FORBIDDEN = 'virtual-money/one-wallet-by-id-forbidden',
  GET_WALLET_HISTORICAL_FAILED_FORBIDDEN = 'virtual-money/get-wallet-historical-forbidden',
  WALLET_NOT_FOUND = 'virtual-money/wallet-not-found',
  WALLET_HISTORICAL_NOT_FOUND = 'virtual-money/wallet-historical-not-found',
}

export const errors = {
  [VirtualMoneyErr.VIRTUAL_MONEY_NOT_FOUND]: 'Failed to find wallet not found',
  [VirtualMoneyErr.FIND_ONE_WALLET_FAILED]: 'Failed to find wallet',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED]: 'Failed to credit wallet',
  [VirtualMoneyErr.DEBIT_WALLET_FAILED]: 'Failed to debit wallet',
  [VirtualMoneyErr.CREATE_WALLET_FAILED]: 'Failed to create wallet',
  [VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED]:
    'Failed to create wallet historical',
  [VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED]: 'Failed to get wallet by id',
  [VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED]:
    'Failed to get wallet historical',
  [VirtualMoneyErr.CREATE_WALLET_FAILED_CMS_NOT_EXIST]:
    'Failed to create wallet, does not exist',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED_CMS_NOT_EXIST]:
    'Failed to credit wallet, does not exist',
  [VirtualMoneyErr.DEBIT_WALLET_FAILED_CMS_NOT_EXIST]:
    'Failed to debit wallet, does not exist',
  [VirtualMoneyErr.FIND_ONE_WALLET_FAILED_CMS_NOT_EXIST]:
    'Failed to debit one wallet, does not exist',
  [VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED_CMS_NOT_EXIST]:
    'Failed to debit one wallet by id, does not exist',
  [VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED_CMS_NOT_EXIST]:
    'Failed to debit get wallet hisotrical, does not exist',
  [VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FORBIDDEN]:
    'Failed to debit get wallet hisotrical, forbidden',
  [VirtualMoneyErr.CREATE_WALLET_FAILED_FORBIDDEN]:
    'Failed to credit wallet, forbidden',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED_FORBIDDEN]:
    'Failed to credit wallet, forbidden',
  [VirtualMoneyErr.DEBIT_WALLET_FAILED_FORBIDDEN]:
    'Failed to debit wallet, forbidden',
  [VirtualMoneyErr.FIND_ONE_WALLET_FAILED_FORBIDDEN]:
    'Failed to debit one wallet, forbidden',
  [VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED_FORBIDDEN]:
    'Failed to debit one wallet by id, forbidden',
  [VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED_FORBIDDEN]:
    'Failed to debit get wallet hisotrical, forbidden',
  [VirtualMoneyErr.WALLET_NOT_FOUND]:
    'Failed to create wallet hisotrical, not found',
  [VirtualMoneyErr.WALLET_HISTORICAL_NOT_FOUND]:
    'Failed to create wallet hisotrical, not found',
};

export const errorFactory = new ErrorFactory<VirtualMoneyErr>(
  'Virtual Money',
  errors,
);
