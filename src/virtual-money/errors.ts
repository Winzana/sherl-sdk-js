import { ErrorFactory } from '../common/errors';

export enum VirtualMoneyErr {
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
  CREATE_WALLET_HISTORICAL_NOT_FOUND = 'virtual-money/create-wallet-historical-not-found',
  CREATE_WALLET_HISTORICAL_ALREADY_EXIST = 'virtual-money/create-wallet-historical-already-exist',
  CREATE_WALLET_FAILED_CMS_FORBIDDEN = 'virtual-money/create-wallet-failed-cms-forbidden',
  CREATE_WALLET_FAILED_CMS_NOT_FOUND = 'virtual-money/create-wallet-failed-cms-not-found',
  CREATE_WALLET_FAILED_CMS_ALREADY_EXIST = 'virtual-money/create-wallet-failed-cms-already-exist',
  CREDIT_WALLET_FAILED_CMS_FORBIDDEN = 'virtual-money/create-wallet-failed-cms-forbidden',
  CREDIT_WALLET_FAILED_CMS_NOT_FOUND = 'virtual-money/create-wallet-failed-cms-not-found',
  CREDIT_WALLET_FAILED_CMS_ALREADY_EXIST = 'virtual-money/create-wallet-failed-cms-already-exist',
  DEBIT_WALLET_FAILED_CMS_FORBIDDEN = 'virtual-money/debit-wallet-failed-cms-forbidden',
  DEBIT_WALLET_FAILED_CMS_NOT_FOUND = 'virtual-money/debit-wallet-failed-cms-not-found',
  DEBIT_WALLET_FAILED_CMS_ALREADY_EXIST = 'virtual-money/debit-wallet-failed-cms-already-exist',
  FIND_ONE_WALLET_FAILED_CMS_FORBIDDEN = 'virtual-money/find-one-wallet-cms-forbidden',
  FIND_ONE_WALLET_FAILED_CMS_NOT_FOUND = 'virtual-money/find-one-wallet-cms-not-found',
  GET_ONE_WALLET_BY_ID_FAILED_CMS_FORBIDDEN = 'virtual-money/one-wallet-by-id-cms-forbidden',
  GET_ONE_WALLET_BY_ID_FAILED_CMS_NOT_FOUND = 'virtual-money/one-wallet-by-id-cms-not-found',
  GET_WALLET_HISTORICAL_FAILED_CMS_FORBIDDEN = 'virtual-money/get-wallet-historical-cms-forbidden',
  GET_WALLET_HISTORICAL_FAILED_CMS_NOT_FOUND = 'virtual-money/get-wallet-historical-cms-not-found',
}

export const errors = {
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
    'Failed to create wallet, CMS does not exist',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED_CMS_NOT_EXIST]:
    'Failed to credit wallet, CMS does not exist',
  [VirtualMoneyErr.DEBIT_WALLET_FAILED_CMS_NOT_EXIST]:
    'Failed to debit wallet, CMS does not exist',
  [VirtualMoneyErr.FIND_ONE_WALLET_FAILED_CMS_NOT_EXIST]:
    'Failed to debit one wallet, CMS does not exist',
  [VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED_CMS_NOT_EXIST]:
    'Failed to debit one wallet by id, CMS does not exist',
  [VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED_CMS_NOT_EXIST]:
    'Failed to debit get wallet hisotrical, CMS does not exist',
  [VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FORBIDDEN]:
    'Failed to debit get wallet hisotrical, CMS forbidden',
  [VirtualMoneyErr.CREATE_WALLET_HISTORICAL_NOT_FOUND]:
    'Failed to debit get wallet hisotrical, CMS not found',
  [VirtualMoneyErr.CREATE_WALLET_HISTORICAL_ALREADY_EXIST]:
    'Failed to debit get wallet hisotrical, CMS already exist',
  [VirtualMoneyErr.CREATE_WALLET_FAILED_CMS_FORBIDDEN]:
    'Failed to credit wallet, CMS forbidden',
  [VirtualMoneyErr.CREATE_WALLET_FAILED_CMS_NOT_FOUND]:
    'Failed to credit wallet, CMS not found',
  [VirtualMoneyErr.CREATE_WALLET_FAILED_CMS_ALREADY_EXIST]:
    'Failed to credit wallet, CMS already exist',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED_CMS_FORBIDDEN]:
    'Failed to credit wallet, CMS forbidden',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED_CMS_NOT_FOUND]:
    'Failed to credit wallet, CMS not found',
  [VirtualMoneyErr.CREDIT_WALLET_FAILED_CMS_ALREADY_EXIST]:
    'Failed to credit wallet, CMS already exist',
  [VirtualMoneyErr.DEBIT_WALLET_FAILED_CMS_FORBIDDEN]:
    'Failed to debit wallet, CMS forbidden',
  [VirtualMoneyErr.DEBIT_WALLET_FAILED_CMS_NOT_FOUND]:
    'Failed to debit wallet, CMS not found',
  [VirtualMoneyErr.DEBIT_WALLET_FAILED_CMS_ALREADY_EXIST]:
    'Failed to debit wallet, CMS already exist',
  [VirtualMoneyErr.FIND_ONE_WALLET_FAILED_CMS_FORBIDDEN]:
    'Failed to debit one wallet, CMS forbidden',
  [VirtualMoneyErr.FIND_ONE_WALLET_FAILED_CMS_NOT_FOUND]:
    'Failed to debit one wallet, CMS not found',
  [VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED_CMS_FORBIDDEN]:
    'Failed to debit one wallet by id, CMS forbidden',
  [VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED_CMS_NOT_FOUND]:
    'Failed to debit one wallet by id, CMS not found',
  [VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED_CMS_FORBIDDEN]:
    'Failed to debit get wallet hisotrical, CMS forbidden',
  [VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED_CMS_NOT_FOUND]:
    'Failed to debit get wallet hisotrical, CMS not found',
};

export const errorFactory = new ErrorFactory<VirtualMoneyErr>(
  'Virtual Money',
  errors,
);
