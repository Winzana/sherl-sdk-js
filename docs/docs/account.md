---
id: account
title: Account
---

## Create account

<span class="badge badge--success">Public</span>

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
  location: IAccountLocation;
  password: number;
  passwordRepeat: number;
}
```

- [IAccountLocation](account-types#iaccountlocation)(`location`)

This call returns an [IAccount](account-types#iaccount) object.
