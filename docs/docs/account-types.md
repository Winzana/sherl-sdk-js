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
  location: IAccountLocation;
  createdAt: Date;
  updatedAt: Date;
}
```

## IAccountLocation

```ts
type IAccountLocation = Omit<IAddress, 'id' | 'createdAt'>;
```
- [IAddress](place-types#iaddress)(`IAccountLocation`)