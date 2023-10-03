---
id: account-types
title: Account types
---

## IAccount

```ts
interface IAccount {
  id: string;
  uri: string;
  projects: string[];
  firstName: string;
  lastName: string;
  email: string;
  mobilePhoneNumber: string;
  birthDate: Date;
  gender: string;
  legalName: string;
  location: IAddressDto;
  createdAt: Date;
  updatedAt: Date;
}
```

## IAddressDto

```ts
interface IAddressDto {
  id: string;
  country: string;
  locality: string;
  region: string;
  postalCode: string;
  streetAddress: string;
  uri?: string;
  createdAt?: Date;
  department?: string;
  complementaryStreetAddress?: string;
  name?: string;
  originId?: string;
  latitude?: number;
  longitude?: number;
}
```
