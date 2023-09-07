---
id: iam
title: Iam
---

## Get all iam profiles

<span class="badge badge--warning">Require authentication</span>

Retrieve all iam profiles informations.

```ts
const iamProfiles = await Sherl.iam.getAllIamProfiles();
```

Return a paginated array of IGetAllIamProfiles

## Get iam profile by id

<span class="badge badge--warning">Require authentication</span>

Retrieve iam profile informations.

```ts
const iamProfile = await Sherl.iam.getIamProfileById('id');
```

Return IGetOneIamProfile

## Get iam role by id

<span class="badge badge--warning">Require authentication</span>

Retrieve iam role informations.

```ts
const iamRole = await Sherl.iam.getIamRoleById('id');
```

Return IIamRole
