export interface IWallet {
  userId: string;
  walletId: string;
}

export interface IAddRibBody {
  iban: string;
  bic: string;
}

export interface IRib {
  iban: string;
  bic: string;
  ibanId?: string;
}
