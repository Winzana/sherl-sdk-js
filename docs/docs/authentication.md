---
id: authentication
title: Authentication
sidebar_label: Authentication
---

Some methods will require a valid authentication token. To create this token, you have to sign in with a valid email/password combination.

:::caution
This method will be subject to change soon and should provide a better way to authenticate.
:::

```ts
// With require
const sherl = require('@sherl/sdk');
// OR import
import * as Sherl from '@sherl/sdk';

const promise = Sherl.auth.signInWithEmailAndPassword(
  'mail@example.com',
  'password',
);

promise.then(() => {
  console.log('Login successful');
});
```
