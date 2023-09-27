---
id: shop-types
title: Shop types
---

# Product

### ICategoryResponse
```ts
interface ICategoryResponse {
  id: string;
  uri: string;
  taxeValue: number;
  consumerId: string;
  parentUri: string;
  name: string;
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  subCategories: ICategoryResponse[];
}
```

### IProductResponse
```ts
interface IProductResponse {
  isEnable: boolean;
  id: string;
  uri: string;
  consumerId: string;
  name: string;
  slogan: string;
  description: string;
  categoryUri: string;
  offers: IOffer[];
  metadatas: IMetadatas;
  options: IOption[];
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  category: null;
}
```

### IOffer
```ts
interface IOffer {
  priceDiscount: number;
  price: number;
  priceTaxIncluded: number;
  taxRate: number;
  frequency: OfferFrequencyEnum;
}

enum OfferFrequencyEnum {
  ONCE = 'once',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}
```

### IMetadatas
```ts
interface IMetadatas {
  degreeOfAlcohol: string;
}
```

### IOption
```ts
interface IOption {
  id: string;
  name: string;
  items: IOptionItem[];
  required: boolean;
  multiple: boolean;
  rangeMin: number;
  rangeMax: number;
}

interface IOptionItem {
  name: string;
  priceTaxIncluded: number;
  available: boolean;
} 
```

# Wallet

### IRib

```ts
interface IRib {
  iban: string;
  bic: string;
  ibanId?: string;
}
```

### IWallet
```ts
interface IWallet {
  userId: string;
  walletId: string;
}
```
