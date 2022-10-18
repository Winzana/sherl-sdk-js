---
id: organization
title: Organization
---

## Get organizations list

Retrieve organizations list.

```ts
// Require authentication
const organizations = await Sherl.organization.getOrganizations(1, 10, {
  /* Filters */
});

// Public
const organizations = await Sherl.organization.getPublicOrganizations(1, 10, {
  /* Filters */
});
```

Return a paginated array of Organization.

## Get organization by id

Retrieve an organization by ID.

```ts
// Require authentication
const organization = await Sherl.organization.getOrganization(
  'organization-id',
);

// Public
const organization = await Sherl.organization.getPublicOrganization(
  'organization-id',
);
```

Return an Organization.

## Get organization by slug

Retrieve one organization by slug.

```ts
const organization = await Sherl.organization.getPublicOrganizationBySlug(
  'slug',
);
```

Return an Organization.
