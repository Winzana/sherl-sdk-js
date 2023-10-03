---
id: account
title: Account
---

## Create account

<span class="badge badge--warning">Do not require authentication</span>

Create an account

```ts
const account = await account(client).createAccount(data: IAccountCreateInputDto);
```

```ts
interface IAccountCreateInputDto {
  hosts: string[];
  ips?: string[];
  firstName: string;
  lastName: string;
  email: string;
  mobilePhoneNumber: string;
  birthDate: Date;
  gender: string;
  legalName: string;
  location: IAddressDto;
  password: number;
  passwordRepeat: number;
}
```

This call returns an [IAccount](account-types#iaccount) object.
