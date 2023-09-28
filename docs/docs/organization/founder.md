---
id: organization-founder
title: Founder
---

This page list all actions available on organization's founder.

## Create new founder

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).createFounder(organizationId: string, founder: ICreateFounderDto);
```

```ts
interface ICreateFounderDto {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string
}
```

This call returns an [IFounder](../organization-types#ifounder) object.

## Update a founder

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).updateFounder(
  organizationId: string,
  founderId: string,
  updatedFounder: Partial<IOrganizationMemberInputDto>
);
```

**Partial** permit to have all properties optionnal. 
```ts
interface IOrganizationMemberInputDto {
  firstName: string;
  lastName: string;
  email: string;
}
```

This call returns an [IFounder](../organization-types#ifounder) object.

## Delete a founder

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).deleteFounder(organizationId: string, founderId: string);
```

This call returns an [IFounder](../organization-types#ifounder) object.