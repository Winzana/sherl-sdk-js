---
id: organization-index
title: Organization
---

## Get organizations list

Retrieve organizations list.

```ts
// Require authentication
const organizations = await organization(client).getOrganizations(filters: OrganizationFiltersDto);

// Public
const organizations = await organization(client).getPublicOrganizations(filters: OrganizationFiltersDto);
```

See [**OrganizationFiltersDto**](organization-types#organizationfiltersdto)

This call return a [paginated](pagination#pagination) array of [IOrganizationResponse](organization-types#iorganizationresponse).

## Get organization by id

Retrieve an organization by ID.

```ts
// Require authentication
const organization = await organization(client).getOrganization(id: string);

// Public
const organization = await organization(client).getPublicOrganization(id: string);
```

This call returns an [IOrganizationResponse](organization-types#iorganizationresponse) object.

## Get organization by slug

Retrieve one organization by slug.

```ts
const organization = await organization(client).getPublicOrganizationBySlug(slug: string);
```

This call returns an [IOrganizationResponse](organization-types#iorganizationresponse) object.