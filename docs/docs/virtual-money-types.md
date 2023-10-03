---
id: virtual-money-types
title: Virtual Money types
---

## IWallet

```ts
interface IWallet {
  id: string;
  uri: string;
  amount: number;
  consumerId: string;
  personId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## IWalletHistorical

```ts
interface IWalletHistorical {
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
```
