---
id: organization-index
title: CRUD
---

## Get organizations list

<span class="badge badge--warning">Require authentication</span>

```ts
const organizations = await organization(client).getOrganizations(filters: OrganizationFiltersDto);
```

<span class="badge badge--success">Public</span>

```ts
const organizations = await organization(client).getPublicOrganizations(filters: OrganizationFiltersDto);
```

See [**OrganizationFiltersDto**](../organization-types#organizationfiltersdto)

This call return a [paginated](../pagination#pagination) array of [IOrganizationResponse](../organization-types#iorganizationresponse).

## Get organization by id

<span class="badge badge--warning">Require authentication</span>

```ts
const organization = await organization(client).getOrganization(id: string);
```

<span class="badge badge--success">Public</span>

```ts
const organization = await organization(client).getPublicOrganization(id: string);
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Get organization by slug

<span class="badge badge--success">Public</span>

```ts
const organization = await organization(client).getPublicOrganizationBySlug(slug: string);
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Create organization

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).createOrganization(data: ICreateOrganizationInputDto);
```

```ts
interface ICreateOrganizationInputDto {
  id: string;
  legalName: string;
  siret: string;
  createdAt: string;
  location: {
    id: string;
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    uri: string;
    createdAt: string;
    department: string;
    complementaryStreetAddress: string;
    name: string;
    originId: string;
    latitude: number;
    longitude: number;
  };
}
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Register organization to person

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).registerOrganizationToPerson(organizationToPerson: IRegisterOrganizationToPerson);
```

```ts
interface IRegisterOrganizationToPerson {
  organization: {
    id: string;
    legalName: string;
    location: {
      id: string;
      country: string;
      locality: string;
      region: string;
      postalCode: string;
      streetAddress: string;
      latitude: number;
      longitude: number;
    };
  };
  person: {
    firstName: string;
    lastName: string;
    address: {
      id: string;
      country: string;
      locality: string;
      region: string;
      postalCode: string;
      streetAddress: string;
    };
    mobilePhoneNumber: string;
    nationality: string;
    birthDate: string;
    email: string;
    gender: string;
    settings: {
      notifications: {
        smsEnable: boolean;
        emailEnable: boolean;
        pushEnable: boolean;
      };
    };
  };
}
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Update organization

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).updateOrganization(organizationId: string, updatedOrganization: IUpdateOrganizationDto);
```

```ts
interface IUpdateOrganizationRequest {
  location: {
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    latitude: number;
    longitude: number;
  };
}
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Suggest an organization

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).suggestOrganization(suggestion: ISuggestOrganizationRequest);
```

```ts
interface ISuggestOrganizationRequest {
  id: string;
  legalName: string;
  siret: number;
  location: {
    id: string;
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    latitude: number;
    longitude: number;
  };
  serviceType: [
    {
      id: string;
      uri: string;
      code: string;
      values: [
        {
          language: string;
          value: string;
          createdAt: string;
        },
      ];
      createdAt: string;
    },
    {
      id: string;
      uri: string;
      code: string;
      values: [
        {
          language: string;
          value: string;
          createdAt: string;
        },
      ];
      createdAt: string;
    },
  ];
}
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.
