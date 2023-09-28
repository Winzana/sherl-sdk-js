---
id: organization-opening-hours
title: Opening hours
---

This page list all actions available on organization's opening hours.

## Create opening hours specification

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).createOpeningHoursSpecification(organizationId: string, data: IOpeningHoursSpecificationInputDto);
```

```ts
interface IOpeningHoursSpecificationInputDto {
  id?: string;
  dayOfWeek: string;
  closes: string;
  opens: string;
  validFrom: string;
  validThrough: string;
}
```

This call returns [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Update opening hours specification

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).updateOpeningHoursSpecification(organizationId: string, hoursSpecId: string, data: IOpeningHoursSpecificationInputDto);
```

```ts
interface IOpeningHoursSpecificationInputDto {
  id?: string;
  dayOfWeek: string;
  closes: string;
  opens: string;
  validFrom: string;
  validThrough: string;
}
```

This call returns [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Delete an opening hours specification

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).deleteOpeningHoursSpecification(organizationId: string, hoursSpecId: string);
```

This call returns [IOrganizationResponse](../organization-types#iorganizationresponse) object.

