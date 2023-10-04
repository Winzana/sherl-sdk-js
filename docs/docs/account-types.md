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
  location: IAddress;
  createdAt: Date;
  updatedAt: Date;
}
```
