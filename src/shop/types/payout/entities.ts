export interface IPayout {
  id: string;
  uri: string;
  consumerId: string;
  organizationUri: string;
  orderUris: string[];
  amount: number;
  payoutId: string;
  AuthorId: string;
  UserId: string;
  BankAccountId: string;
  DebitedWalletId: string;
  BankWireRef: string;
  Status?: string;
  Type?: string;
  Nature?: string;
  PaymentType?: string;
  ResultMessage?: string;
  DebitedFunds: {
    Currency: string;
    Amount: number;
  };
  Fees: {
    Currency: string;
    Amount: number;
  };
  CreditedFunds: {
    Currency: string;
    Amount: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
