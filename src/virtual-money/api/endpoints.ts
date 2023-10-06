export const endpoints = {
  FIND_ONE_WALLET_BY: '/api/wallet/find-one',
  CREDIT_WALLET: '/api/wallet/:walletId/credit',
  DEBIT_WALLET: '/api/wallet/:walletId/debit',
  CREATE_WALLET: '/api/wallet',
  CREATE_WALLET_HISTORICAL: '/api/wallet/:walletId/historical',
  GET_ONE_WALLET_BY_ID: 'api/wallet/:walletId',
  GET_WALLET_HISTORICAL: 'api/wallet/:walletId/historical/:historicalId',
};
