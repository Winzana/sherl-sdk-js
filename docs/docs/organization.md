---
id: organization
title: Organization
---

## Get organizations list

Retrieve organizations list.

```ts
// Require authentication
const organizations = await Sherl.organization(client).getOrganizations(1, 10, {
  /* Filters */
});

// Public
const organizations = await Sherl.organization(client).getPublicOrganizations(1, 10, {
  /* Filters */
});
```

Return a paginated array of Organization.

## Get organization by id

Retrieve an organization by ID.

```ts
// Require authentication
const organization = await Sherl.organization(client).getOrganization(
  'organization-id',
);

// Public
const organization = await Sherl.organization(client).getPublicOrganization(
  'organization-id',
);
```

Return an Organization.

## Get organization by slug

Retrieve one organization by slug.

```ts
const organization = await Sherl.organization(client).getPublicOrganizationBySlug(
  'slug',
);
```

Return an Organization.

## Add organization rib

Allows you to add rib to an organization

```ts
// Require authentication
const organization = await Sherl.organization(client).addOrganizationRib('id', {
  iban: 'myIban',
  bic: 'myBic',
});
```

Return boolean.

## Get all organization documents

Retrieve all documents of an organization

```ts
const organization = await Sherl.organization(client).getAllOrganizationDocuments('id');
```

Return IGetAllOrganizationDocumentsResponse.

