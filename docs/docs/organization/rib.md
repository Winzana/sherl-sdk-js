---
id: organization-rib
title: RIB
---

This page list all actions about organization's ribs management.

## Add organization rib

Allows you to add rib to an organization

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).addOrganizationRib(organizationId: string, info: IAddRibBody);
```

```ts
interface IAddRibBody {
  rib: string;
  bic: string;
}
```

This call returns an [IRib](../shop-types#irib) object.

## Get all organization ribs

Retrieve all documents of an organization

<span class="badge badge--warning">Require authentication</span>

```ts
const organization = await organization(client).getAllRibs(id: string);
```

This call returns an array of [IRib](../shop-types#irib) objects.
