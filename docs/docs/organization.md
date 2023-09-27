---
id: organization
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

## Add organization rib

<span class="badge badge--warning">Require authentication</span>

Allows you to add rib to an organization

```ts
const organization = await organization(client).addOrganizationRib(id: string, info: IAddRibBody);
```

```ts
interface IAddRibBody {
  rib: string;
  bic: string;
}
```

This call returns an [IRib](shop-types#irib) object.

## Get all organization documents

<span class="badge badge--warning">Require authentication</span>

Retrieve all documents of an organization

```ts
const organization = await organization(client).getAllOrganizationDocuments(id: string);
```

This call returns an [IOrganizationDocumentsResponse](organization-types#iorganizationdocumentresponse) object.
