---
id: iam
title: IAM
---

## Get all IAM profiles

<span class="badge badge--warning">Require authentication</span>

Retrieve all IAM profiles informations.

```ts
await iam(client).getAllIAMProfiles();
```

This call returns an array of [IProfile](iam-types#iprofile).

## Get iam profile by id

<span class="badge badge--warning">Require authentication</span>

Retrieve IAM profile informations.

```ts
await iam(client).getIAMProfileById(id: string);
```

This call returns an [IProfile](iam-types#iprofile).

## Get iam role by id

<span class="badge badge--warning">Require authentication</span>

Retrieve IAM role informations.

```ts
await iam(client).getIAMRoleById(id: string);
```

This call returns an [IRole](iam-types#irole)
