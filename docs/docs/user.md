---
id: user
title: User domain
sidebar_label: User
---

## Update current user password
<span class="badge badge--warning">Require authentication</span>

Update my user password :
Update current user password based on bearer token

```ts
await user(client).updateMyPassword({
  oldPassword: 'notsosecret',
  password: 'reallysecret',
  passwordRepeat: 'reallysecret',
});
```