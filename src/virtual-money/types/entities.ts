export interface IWallet {
  id: string;
  uri: string;
  amount: number;
  consumerId: string;
  personId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreditWalletInputDto {
  amount: number;
  description: string;
}

export interface ICreateWalletInputDto {}

export interface ICreateWalletHistoricalInputDto {
  idOrganization: string;
  description: string;
  amount: number;
}

export interface IWalletHistorical {
  id: string;
  uri: string;
  amount: number;
  consumerId: string;
  organizationId: string;
  description: string;
  personId: string;
  walletId: string;
  createdAt: Date;
}

export interface IDebitWalletInputDto {
  amount: number;
  description: string;
  organizationId: string;
}