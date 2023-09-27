---
id: user
title: User domain
sidebar_label: User
---

## Update current user password
<span class="badge badge--warning">Require authentication</span>

Update my user password :
Update current user password based on Bearer token

```ts
await user(client).updateMyPassword(data: IUpdatePasswordDto);
```

```ts
interface IUpdatePasswordDto {
  oldPassword: string;
  password: string;
  passwordRepeat: string;
}
```

This call returns a boolean according to successfully
