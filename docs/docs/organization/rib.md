---
id: organization-rib
title: RIB
---

This page list all actions about organization's ribs management.

## Add organization rib

<span class="badge badge--warning">Require authentication</span>
Adds a rib to an organization

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

<span class="badge badge--warning">Require authentication</span>
Retrieves all documents of an organization

```ts
const organization = await organization(client).getAllRibs(id: string);
```

This call returns an array of [IRib](../shop-types#irib) objects.
