---
id: user-types
title: User types
---

## IUser

```ts
interface IUser {
  id: string;
  uri?: string;
  consumerId?: string;
  organizationId?: string;
  email?: string;
  mobilePhoneNumber?: string;
  code?: {
    generatedAt?: any;
    value?: string;
  };
  password?: string;
  enabled?: boolean;
  deleted?: boolean;
  type?: PersonTypeEnum;
  profileUri?: string;
  profile?: IProfile;
  profilesUri?: string[];
  profiles?: IProfile[];
  rolesUri?: string[];
  frozenRoles?: IRole[];
  roles?: IRole[];
  tokens?: {
    facebook?: string;
    google?: string;
    twitter?: string;
  };
  lastLoginAt: any;
  createdAt: any;
  updatedAt?: any;
  // calculated properties (not persisted)
  person?: IPerson;
}
```

- [IProfile](iam-types#iprofile)(`profile`, `profiles`)
- [PersonTypeEnum](person-types#persontypeenum)(`type`)
- [IRole](iam-types#irole)(`frozenRoles`, `roles`)