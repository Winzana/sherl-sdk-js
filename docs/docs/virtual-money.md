---
id: virtual-money
title: Virtual Money
---

## Find wallet by

<span class="badge badge--warning">Require authentication</span>

Find one wallet by id, personId and consumerId

```ts
const wallet = await virtualMoney(client).findOneWallet(
  id: string,
  personId: string,
  consumerId: string,
);
```

This call returns an [IWallet](virtual-money-types#iwallet) object.

## Credit Wallet

<span class="badge badge--warning">Require authentication</span>

```ts
const wallet = await virtualMoney(client).creditWallet(data: ICreditWalletInputDto);
```

```ts
interface ITransferWalletInputDto {
  amount: number;
  description: string;
  organizationId: string;
}
```

This call returns an [IWallet](virtual-money-types#iwallet) object.

## Create Wallet

<span class="badge badge--warning">Require authentication</span>

```ts
const wallet = await virtualMoney(client).createWallet(data: ICreditWalletInputDto);
```

```ts
interface ICreateWalletInputDto {} // TODO: wait for correction and complete
```

This call returns an [IWallet](virtual-money-types#iwallet) object.

## Get Wallet by id

<span class="badge badge--warning">Require authentication</span>

Get one wallet by id

```ts
const wallet = await virtualMoney(client).getWalletById(walletId: string);
```

This call returns an [IWallet](virtual-money-types#iwallet) object.

## Debit Wallet

<span class="badge badge--warning">Require authentication</span>

```ts
const wallet = await virtualMoney(client).debitWallet(walletId: string, data: ICreditWalletInputDto);
```

```ts
interface ITransferWalletInputDto {
  amount: number;
  description: string;
  organizationId: string;
}
```

This call returns an [IWallet](virtual-money-types#iwallet) object.

## Create wallet historical

<span class="badge badge--warning">Require authentication</span>

Create a wallet historical

```ts
const wallet = await virtualMoney(client).createWalletHistorical(walletId: string, data: ITransferWalletInputDto);
```

```ts
interface ITransferWalletInputDto {
  amount: number;
  description: string;
  organizationId: string;
}
```

This call returns an [IWalletHistorical](virtual-money-types#iwallethistorical) object.

## Get Wallet Historical

<span class="badge badge--warning">Require authentication</span>

Get a wallet historical

```ts
const wallet = await virtualMoney(client).getWalletHistorical(walletId: string, historicalId: string);
```

This call returns an [IWalletHistorical](virtual-money-types#iwallethistorical) object.
