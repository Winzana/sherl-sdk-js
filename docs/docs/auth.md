---
id: auth
title: Auth
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Login with differents providers

<span class="badge badge--success">Public</span>

<Tabs
defaultValue="google"
values={[
{label: 'Google', value: 'google'},
{label: 'Apple', value: 'apple'},
{label: 'Facebook', value: 'facebook'},
]}>

<TabItem value="google">

```ts
await auth(client).loginWithGoogle(googleInfos: IAuthExternalServiceUserInfo);
```

</TabItem>
<TabItem value="apple">

```ts
await auth(client).loginWithApple(appleInfos: IAuthExternalServiceUserInfo);
```

</TabItem>
<TabItem value="facebook">

```ts
await auth(client).loginWithFacebook(facebookInfos: IAuthExternalServiceUserInfo);
```

</TabItem>

</Tabs>

<details>
<summary><b>IAuthExternalServiceUserInfo</b></summary>

```ts
interface IAuthExternalServiceUserInfo {
  displayName: string;
  emails: [{ value: string; verified: boolean }];
  id: string;
  locale: string;
  name: { familyName: string; givenName: string };
  photos: [
    {
      value: string;
    },
  ];
}
```

</details>



These calls return an [ILoginResponse](auth-types#iloginresponse) object.

## Login with code

<span class="badge badge--success">Public</span>

```ts
await auth(client).loginWithCode(userId: string, code: string);
```

This call returns an [ILoginResponse](auth-types#iloginresponse) object.

## Send SMS code

<span class="badge badge--success">Public</span>

```ts
await auth(client).sendSMSCode(mobilePhoneNumber: string);
```

This call returns a boolean.

## Resend SMS code

<span class="badge badge--success">Public</span>


```ts
await auth(client).resendSMSCode(mobilePhoneNumber: string);
```

This call returns a boolean.

## Validate code

<span class="badge badge--success">Public</span>

```ts
await auth(client).validateCode(mobilePhoneNumber: string, code: string);
```

This call returns an [ILoginResponse](auth-types#iloginresponse) object.
