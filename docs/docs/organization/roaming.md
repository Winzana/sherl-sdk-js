---
id: organization-roaming
title: Roaming
---

This page list all actions available on organization's roaming management.

## Enable roaming

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).enableRoaming(organizationId: string);
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Disable roaming

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).disableRoaming(organizationId: string);
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

