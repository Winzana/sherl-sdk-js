---
id: organization-employee
title: Employee
---

This page list all actions available on organization's employees.

## Create new employee

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).createEmployee(organizationId: string, employee: IOrganizationMemberInputDto);
```

```ts
interface IOrganizationMemberInputDto {
  firstName: string;
  lastName: string;
  email: string;
}
```

This call returns an [IEmployee](../organization-types#iemployee) object.

## Update an employee

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).updateEmployee(
  organizationId: string,
  employeeId: string,
  updatedEmployee: Partial<IOrganizationMemberInputDto>
  );
```

**Partial** permit to have all properties optional.

```ts
interface IOrganizationMemberInputDto {
  firstName: string;
  lastName: string;
  email: string;
}
```

This call returns an [IEmployee](../organization-types#iemployee) object.

## Delete an employee

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).deleteEmployee(organizationId: string, employeeId: string);
```

This call returns an [IEmployee](../organization-types#iemployee) object.
