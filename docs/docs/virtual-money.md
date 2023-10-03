---
id: virtual-money
title: Virtual Money
---

## Find wallet by

<span class="badge badge--warning">Require authentication</span>

Find one wallet by id, personId and consumerId

```ts
const wallet = await virtualMoney(client).findOneWallet({
  id: string,
  personId: string,
  consumerId: string,
});
```

This call returns an [IWallet](virtual-money-types#iwallet) object.

## Credit Wallet

<span class="badge badge--warning">Require authentication</span>

Credit a wallet

```ts
const wallet = await virtualMoney(client).creditWallet(data: ICreditWalletInputDto);
```

```ts
interface ICreditWalletInputDto {
  amount: number;
  description: string;
}
```

This call returns an [IWallet](virtual-money-types#iwallet) object.

## Create Wallet

<span class="badge badge--warning">Require authentication</span>

Create a wallet

```ts
const wallet = await virtualMoney(client).createWallet(data: ICreditWalletInputDto);
```

```ts
interface ICreateWalletInputDto {} // TODO: wait for correction and complete
```

This call returns an [IWallet](virtual-money-types#iwallet) object.
