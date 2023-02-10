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
// With require
const Sherl = require('@sherl/sdk');
// OR import
import * as Sherl from '@sherl/sdk';
// OR
import { user } from '@sherl/sdk';

await Sherl.user(client).updateMyPassword({
  oldPassword: 'notsosecret',
  password: 'reallysecret',
  passwordRepeat: 'reallysecret',
});
// OR
await user(client).updateMyPassword({
  oldPassword: 'notsosecret',
  password: 'reallysecret',
  passwordRepeat: 'reallysecret',
});
```