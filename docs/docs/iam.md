---
id: iam
title: Iam
---

## Get all iam profiles

<span class="badge badge--warning">Require authentication</span>

Retrieve all iam profiles informations.

```ts
const iamProfiles = await iam(client).getAllIamProfiles();
```

This call returns an array of [IProfile](iam-types#iprofile).

## Get iam profile by id

<span class="badge badge--warning">Require authentication</span>

Retrieve iam profile informations.

```ts
const iamProfile = await iam(client).getIamProfileById(id: string);
```

This call returns an [IProfile](iam-types#iprofile).

## Get iam role by id

<span class="badge badge--warning">Require authentication</span>

Retrieve iam role informations.

```ts
const iamRole = await iam(client).getIamRoleById(id: string);
```

This call returns an [IRole](iam-types#irole)
