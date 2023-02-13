---
id: authentication
title: Authentication
sidebar_label: Authentication
---

Some methods will require a valid authentication token. To create this token, you have to sign in with a valid email/password combination.

:::caution
This method will be subject to change soon and should provide a better way to authenticate.
:::

you can call the library with this :
```ts
// With require
const Sherl = require('@sherl/sdk');
// OR import
import * as Sherl from '@sherl/sdk';
// OR
import { auth } from '@sherl/sdk';
```
then, use the login function to get the token
```ts
const token = await Sherl.auth(client).signInWithEmailAndPassword(
  'mail@example.com',
  'password',
);
```
OR
```ts
const token = await auth(client).signInWithEmailAndPassword('youremail','yourpassword');
```

the login function save your token, but you can also register your token with this function
```ts
Sherl.auth(client).registerToken(token);
// OR
auth(client).registerToken(token);
```

You can refresh your token (token is automatically register with the previous function)
```ts
Sherl.auth(client).refreshToken();
// OR
auth(client).refreshToken();
```
finally, you can logout and clear your token
```ts
Sherl.auth(client).logout();
// OR
auth(client).logout();
```