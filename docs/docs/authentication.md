---
id: authentication
title: Authentication
sidebar_label: Authentication
---

Some methods will require a valid authentication token. To create this token, you have to sign in with a valid email/password combination.

For more information about authentication, please refer to [Auth domain](auth)

:::caution
This method will be subject to change soon and should provide a better way to authenticate.
:::

use the login function to get the token
```ts
const token = await auth(client).signInWithEmailAndPassword(email: string, password: string);
```

the login function save your token, but you can also register your token with this function
```ts
auth(client).registerToken(token);
```

You can refresh your token (token is automatically register with the previous function)
```ts
auth(client).refreshToken();
```
finally, you can logout and clear your token
```ts
auth(client).logout();
```